import http from "https";
import fs from "fs";
import { RequestData } from "./RequestData";
import { isRequestData } from "./RequestData.validator"

//(function(){
    if(!fs.existsSync("./request.json")){
        console.warn("Required input ('request.json') was not found. Please place it on current directory.");
        process.exit(1);
    }
    const data = JSON.parse(fs.readFileSync("./request.json", "utf-8")) as RequestData;
    const jsonpost = JSON.stringify(data.content);
    if(!isRequestData(data)){
        console.warn("request.json was not valid file");
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
//})();