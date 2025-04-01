import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () =>{console.log("Servidor funcionando correctamente en puerto 3000")}); 