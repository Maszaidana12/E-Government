import { auth } from "auth";
import ClientLayout from "./layoutclient";


export default async function DashboardLayout({ children, penduduk }: { children: React.ReactNode, penduduk:React.ReactNode }) {
  const session = await auth();

  return (
    <ClientLayout session={session}>
      {children}
      {penduduk}
    </ClientLayout>
  );
}
