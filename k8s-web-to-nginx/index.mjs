import express from "express";
import fetch from "node-fetch"
import os from 'os'

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    const helloMessage = `version 3 Hello from ${os.hostname()}`
    console.log(helloMessage);
    res.send(helloMessage)
})

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url)
    const body = await response.text();
    res.send(body)
})

app.listen(PORT, () => {
    console.log(`web server is listeining at port ${PORT}`)
})