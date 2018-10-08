import express from 'express';
import server_config from './config/server_config.json';


/** */
var app=express();




var server=app.listen(server_config.server_port,()=>{console.log("Listening on port: "+server.address().port)});