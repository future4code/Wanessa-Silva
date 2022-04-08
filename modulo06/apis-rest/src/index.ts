import express, {Express} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());


type user ={
    id : string | number,
    name : string,
    email : string,
    type : userType.ADMIN | userType.NORMAL
    age : number
}

enum userType{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: userType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: userType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: userType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: userType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: userType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: userType.ADMIN,
        age: 60
    }
]

app.get("/users", (req:Request, res:Response) => {
    try{
        if(!users){
            throw new Error("users not found")
        }
        res.status(200).send(users)
    }catch(error:any){
        res.status(404).send(error.message)
    }
})


app.get("/users/:type", (req:Request, res:Response) => {
    try {
        let type = req.params.type
        
        let filterType = users.filter(users => users.type === type)

        if(filterType.length < 1){
            throw new Error("users type not found try: ADMIN or NORMAL")
        }
        res.status(200).send(filterType)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})








