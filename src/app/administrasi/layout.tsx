import { auth } from "auth";
import ClientLayoutAdministrasi from "./clientLayout";


export default async function administrasiLayout ({children } :  {children:React.ReactNode}) {
    const session = await auth ();

    return (
       <ClientLayoutAdministrasi session = {session}>
        {children}
       </ClientLayoutAdministrasi>
    )
}