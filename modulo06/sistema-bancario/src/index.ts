import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, Users,} from "./dataBase";

              

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


app.get("/allusers", (req:Request, res:Response) => {
    res.status(200).send(users)
})


app.post("/users", (req:Request, res:Response) => {
    let errorCode = 400
    try {
        const {name, CPF, birthday}: Users = req.body
        const findUser = users.find(e => e.CPF === CPF)
        if(findUser !== undefined){
            errorCode = 409
            throw new Error("cpf already cadastred")
        }

        const currentTime = new Date();
        const currentYear = currentTime.getFullYear()
        const userBirthday = birthday.split("/")
        const userYear = Number(userBirthday[2])
        const userAge = currentYear - userYear

        if(userAge < 18){
            errorCode = 406
            throw new Error("usuário deve ter mais de 18 anos")
        }

        const newUser: Users = {
            name: name,
            CPF: CPF,
            birthday: birthday,
            balance: 0,
           
        }

        users.push(newUser)

        res.status(201).send("account created")

    }catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})


app.get("/users/:CPF", (req:Request, res:Response) => {
    let errorCode = 400
    try {
        const CPF = req.params.CPF

        const findUser = users.find(e => e.CPF === CPF)

        const userBalance = findUser?.balance.toString()



        if(!findUser){
            errorCode = 404
            throw new Error("user not found try put CPF like this: XXX.XXX.XXX-XX")
        }

        res.status(200).send(userBalance)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})


app.put("/users/:balance", (req:Request, res:Response) =>{
    let errorCode = 400
    try {
        const {CPF, name, balance} = req.body

        const findUser = users.find(e => e.CPF === CPF)     

        if(!findUser){
            errorCode = 404
            throw new Error("user not found try put CPF like this: XXX.XXX.XXX-XX")
        }

        findUser.balance += Number(balance);

        res.status(200).send("deposit made successfully")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

