import { prisma } from "./prisma";

export const DataPenduduk = async () => {
    try{
        const user = await prisma.penduduk.findMany();
        return user;
    } catch(error){
        throw new Error("Gagal Mengambil Data Penduduk");
    }
};