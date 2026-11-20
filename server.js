const express = require('express');
const chalk = require('chalk')
const app = express();
const port = 3000;
const debug = require('debug')('app');
const morgan = require('morgan');

app.use(morgan('combined'));

app.get("/",(req,res)=> {

	res.send('Hello World!');

})

app.listen(port,() => {
	console.log("listening on port : " + chalk.red(port));
})