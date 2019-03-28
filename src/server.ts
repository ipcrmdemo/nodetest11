import * as express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello World!")
       )
      app.listen(3000, () => process.stdout.write("Example app listening on port 3000!"));
