const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    const items = [
        {
            firstLetter: 'G',
            message: 'Genexus'
        },
        {
            firstLetter: 'D',
            message: 'Delphi'
        },
        {
            firstLetter: 'J',
            message: 'Javascript'
        },
        {
            firstLetter: 'R',
            message: 'React'
        },
        {
            firstLetter: 'P',
            message: 'PostgreSQL'
        },
    ];

    res.render("pages/index", {
        tools: items,
    });
});

app.get("/sobre", (req, res) => {
    res.render("pages/about");
});

app.listen(3000);
console.log("Executando server");