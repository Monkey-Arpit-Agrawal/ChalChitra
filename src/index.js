import 'dotenv/config';

import DB_CONNECT from "./db/index.js";

DB_CONNECT()
    .then(() => {

        app.on('error' , (error) => {
            console.log('Error Occurred : ' , error)
        })

        app.listen(process.env.PORT || 8000 , () => {
            console.log(` Server is running on the port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(`MongoDB Connection Error : ${error}`)
})