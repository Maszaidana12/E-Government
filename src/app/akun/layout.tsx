import { auth } from "auth";
import ClientLayoutAkun from "./clientlayout";

export default async function AkunLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <ClientLayoutAkun session={session}>
      {children}
    </ClientLayoutAkun>
  );
}
