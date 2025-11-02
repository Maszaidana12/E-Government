import withAuth from "@/middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest }from 'next/server.js';

function mainmiddleware (request: NextRequest){
    
    const res = NextResponse.next();
    res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy,revalidate');
    res.headers.set('pragma', 'no-cache');
    res.headers.set('Expires', '0');
    return res;
}

export default withAuth(mainmiddleware,
    ['/dashboard',
     '/akun/penduduk',
     

    
    
    
    
    ]);