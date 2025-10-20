import { auth } from "auth";
import ClientLayout from "./layoutclient";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <ClientLayout session={session}>
      {children}
    </ClientLayout>
  );
}
