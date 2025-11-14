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

export const DataUsers = async () =>{
        try {
            const users = await prisma.users.findMany();
            return users;
        } catch(error){
             throw new Error("Gagal Mengambil Data Penduduk");
        }
}

export const DataKeluarga = async () => {
    try{
        const data = await prisma.kK.findMany();
        return data;
    } catch(error){
        throw new Error("Gagal Mengambil Data Penduduk");
    }
};
