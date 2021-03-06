const express = require("express"),
        app=express(),
        cors = require("cors"),
        port=8000,
        db= "FinalBeltExam"
        server= app.listen(port, () => console.log(`listening on port ${port}`));

app.use(cors());
app.use(express.json());

require("./server/config/database.config")(db);
require("./server/routes/pet.routes")(app);