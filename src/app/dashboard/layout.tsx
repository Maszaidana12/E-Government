import { auth } from "auth";
import DashboardClientLayout from "./layoutclient";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <DashboardClientLayout session={session}>
      {children}
    </DashboardClientLayout>
  );
}
