const express = require("express");
const routes = require("./routes/master");
const cors = require("cors");
const app = express();
const port = 7000;

app.use(express.json());
routes(app);

// app.get("/attendance", (req, res) => {
//     console.log("MAIN SERVER ENDPOINT");
//     res.send("ATTENDANCE SYSTEM ENDPOINT");
// });

app.listen(port, (err) => {
    if (err) throw err;
    console.log(
        "\x1b[32m%s\x1b[0m",
        "  ▲",
        "[ ATTENDANCE SERVER ] is running!",
    );
});
