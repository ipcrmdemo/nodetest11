import * as express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

// tslint:disable-next-line:no-console
const msg = "foo" +
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing" + 
"thing";
app.listen(3000, () => console.log("Example app listening on port 3000!"));
