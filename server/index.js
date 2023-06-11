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
        app.get('/api', (req, res) => {
            res.set('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'text/html');
            res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
            return res.json('notification')
        });


        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();