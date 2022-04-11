const express = require('express');
const app = express();

require('./db')(app);
app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./'));
app.use('/', require('./router/adminRouter')(app));
require('./router/webRouter')(app);


app.listen(3000, () => {
    console.log("vdocs server is listen http://localhost:3000/")
})