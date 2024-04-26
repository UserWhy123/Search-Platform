import express, {Request, Response}  from "express";
import cors from "cors";
import "dotenv/config";


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Server er helt op og køre!' });
});


app.get("/health", async (req: Request, res: Response) => {
    res.send({message: "health.ok!"});
});


app.listen(7000, ()=>{

    console.log("server køre på localhost:7000")
})