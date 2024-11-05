import express from 'express' ;
const app = express() ;

import cors from 'cors' ;
import cookieParser from 'cookie-parser';

app.use(cors(process.env.CORS))

app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./public'))