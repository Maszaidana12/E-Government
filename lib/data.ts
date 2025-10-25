import { prisma } from "./prisma";

export const DataPenduduk = async () => {
    try{
        const user = await prisma.penduduk.findMany();
        return user;
    } catch(error){
        throw new Error("Gagal Mengambil Data Penduduk");
    }
};

export const DataPendudukById = async (id: number) => {
    try{
        const users = await prisma.penduduk.findUnique({
            where:{
                id_penduduk:id,
            }
        });
        return users;
    } catch(error){
        throw new Error("Gagal Mengambil Data Penduduk");
    }
};