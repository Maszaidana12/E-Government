// GET /api/notifikasi
import { prisma } from "lib/prisma";
import { auth } from "auth";

export async function GET() {
  const session = await auth();
  
  if (!session?.user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const notifikasi = await prisma.notifikasi.findMany({
    where: { receiverId : session.user.id },   // hanya notif untuk RT ini
    include: {
      sender: { select: { nama: true } }
    },
    orderBy: { createdAt: "desc" }
  });

  return Response.json(notifikasi);
}

export async function markNotifRead(notifId: number) {
  await prisma.notifikasi.update({
    where: { id: notifId },
    data: { isRead: true },
  });

  return { success: true };
}
