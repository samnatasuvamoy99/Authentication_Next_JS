npm install prisma @types/node @types/pg --save-dev 
npm install @prisma/client @prisma/adapter-pg pg dotenv



Update tsconfig.json for ESM compatibility:

tsconfig.json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "node",
    "target": "ES2023",
    "strict": true,
    "esModuleInterop": true,
    "ignoreDeprecations": "6.0"
  }
}



package.json
{
  "type": "module",
}



npx prisma

npx prisma migrate dev --name init

npx prisma generate


 then create a lib folder then inside the folder create a file prisma.ts
 import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }


import { prisma } from "@/lib/prisma";





this video cover how to connect to db  in next js and migrate the data and how to insert the data and show many on this video 
cover ..............