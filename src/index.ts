import http from "https";
import fs from "fs";
import { RequestData } from "./RequestData";
import { isRequestData } from "./RequestData.validator"
import { Encoding } from "crypto";

export function sendWebhookRequest(filename:string = "./request.json", charset:Encoding = "utf-8"){
    if(!fs.existsSync(filename)){
        console.warn("Required input ('" + filename + "') was not found. Please place it on current directory.");
        process.exit(1);
    }
    const data = JSON.parse(fs.readFileSync(filename, charset)) as RequestData;
    const jsonpost = JSON.stringify(data.content);
    if(!isRequestData(data)){
        console.warn(filename + " was not valid file");
        process.exit(1);
    }
    const request = http.request(data.url, res => {
        console.log("StatusCode: " + res.statusCode);
        res.on("end", ()=>{
            console.log("HTTP Request sent successfully")
        });
        res.on("data", chunk => {
            console.log("Body: " + chunk);
        });
    });
    request.method = "POST"
    request.setHeader("Content-Type", "application/json");
    request.setHeader("Content-Length", Buffer.byteLength(jsonpost));
    request.on("error", (e)=>{
        console.warn("HTTP Request failed: " + e.message);
    });
    request.write(jsonpost);
    request.end();
};