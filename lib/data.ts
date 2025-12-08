import { prisma } from "./prisma";

export const DataPenduduk = async () => {
    try{
        const user = await prisma.penduduk.findMany();
        return user;
    } catch{
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
    } catch{
        throw new Error("Gagal Mengambil Data Penduduk");
    }
};

export const DataUsers = async () =>{
        try {
            const users = await prisma.users.findMany();
            return users;
        } catch{
             throw new Error("Gagal Mengambil Data Penduduk");
        }
}

export const DataKeluarga = async () => {
    try{
        const data = await prisma.kK.findMany();
        return data;
    } catch{
        throw new Error("Gagal Mengambil Data Penduduk");
    }
};

export const JabatanRT = async() =>{
    try{

        const data = await prisma.rT.findMany();
        return data ;

    }catch{
        throw new Error("gagal mengambil data RT")
    }
}


export const findUserByNik = async (nik: string) => {
  try {
    const user = await prisma.users.findUnique({
      where: { nik },
    });
    return user;
  } catch {
    throw new Error("Gagal mengambil data user");
  }
};
