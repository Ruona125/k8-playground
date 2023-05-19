import express from "express";
import os from 'os'

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    const helloMessage = `version 3 Hello from ${os.hostname()}`
    console.log(helloMessage);
    res.send(helloMessage)
})

app.listen(PORT, () => {
    console.log(`web server is listeining at port ${PORT}`)
})