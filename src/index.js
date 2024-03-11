require('dotenv').config();
const app = require('./frameworks/express');
const http = require('http');
const dbConnection = require('./repositories/database/mongoose')

const server = http.createServer(app);
const port = process.env.PORT || 8000;

const main = async () => {
    try {
        await dbConnection();
        server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        })
    } catch(err) {
        console.log(err.message);
    }
}

main();