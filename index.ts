import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "harry"
        }
    });

    console.log(user);
}


main()
    .catch(e => {
        console.log("prisma-eror: ", e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })



