import whatsAppClient from "@green-api/whatsapp-api-client"
import express from "express"
 import bodyParser from "body-parser"
import cors from"cors";




(async () => {
    try {

        const app = express();

        const port = 80;
        let notification
        app.use(bodyParser.json());
        app.post('/', (req, res) => {
            notification = req.body
             console.log(req.body);
            res.status(200).send('');
        });
        app.use(cors());
        app.get('/notification', (req, res) => {
            res.set('Access-Control-Allow-Origin', '*')
            return res.send({notification})
        });


        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();