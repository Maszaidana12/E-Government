import { auth } from "auth";
import ClientLayout from "./layoutclient";
import AnalyticsWrapper from "./analyticsWrapper";

export default async function DashboardLayout({ children}: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <ClientLayout session={session}>
      <AnalyticsWrapper />
      {children}
    </ClientLayout>
  );
}
