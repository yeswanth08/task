import { PrismaClient } from '@prisma/client'
import express,{Request,Response} from 'express'
import zod from 'zod'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express();
const port = process.env.PORT || 3001;


// middlewares

app.use(express.json());
app.use(cors());

// schemas

const userschema = zod.object({
    username: zod.string().min(4),
    password: zod.string()
            .min(6).max(20)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,"Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character")
})

// routes

app.post('/api-auth',async (req:Request,res:Response)=>{
    const user = req.body;
    const username = user['username'];
    const password = user['password'];
    const validate = userschema.safeParse(user).success;
    if (!validate){
        res.send('invalid user')
    }else{
        try{
            const check = await prisma.userdetails.findMany({
                where:{
                    username: username,
                    password: password
                }
            })
            if (check.length>0){
                res.status(200).send('user found');
            }else{
                res.send('user not found');
            }
        }catch(err){console.error(err)};
    }
})

app.post('/api-create',async (req:Request,res:Response)=>{
    const user = req.body;
    const username = user['username'];
    const password = user['password'];
    const validate = userschema.safeParse(user).success;
    if (!validate){
        res.send("invalid user credentials")
    }else{
        try{
            const check = await prisma.userdetails.findMany({
                where:{
                    username: username,
                    password: password
                }
            })
            if (check.length>0){
                res.send("existing user")
            }else{
                const user = await prisma.userdetails.create({
                    data:{
                        username: username,
                        password: password
                    }
                })
                res.send("user created")
            }
        }catch(err) {console.error(err)};
    }
})

app.listen(port);