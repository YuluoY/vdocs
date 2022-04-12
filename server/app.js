const express = require('express');
const app = express();

const fs = require('fs');
let path = '../docs';
let docsPath = [];

function cycleDir(path) {
    let docs = [];
    fs.readdirSync(path).forEach(filename => {
        let fullPath = `${path}/${filename}`;
        if (fs.statSync(fullPath).isDirectory()) {
            docs.push(cycleDir(fullPath));
        } else {
            docs.push(fullPath);
        }
    })
    return docs;
}

docsPath = docsPath.concat(cycleDir(path));
while (docsPath.some(Array.isArray)) {
    docsPath = [].concat(...docsPath);
}
app.docsPath = docsPath;

require('./db')(app);
app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./'));
app.use('/', require('./router/adminRouter')(app));
app.use('/', require('./router/webRouter')(app));


app.listen(3000, () => {
    console.log("vdocs server is listen http://localhost:3000/")
})