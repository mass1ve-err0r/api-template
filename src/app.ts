import express from "express";
import * as bodyParser from "body-parser";
import helmet from "helmet";
// The following two routers are examples for endpoint logic
import exampleRouter1 from "./routers/simple";
import exampleRouter2 from "./routers/secured";


class App {
    
    public app: express.Application;
    
    constructor() {
        this.app = express();
        this.setupMiddlewares();
        this.setupRoutes();
    }
    
    private setupMiddlewares() {
        this.app.use(helmet());
        this.app.use(bodyParser.json({
            limit: '10mb',
            strict: true,
            verify(req: any, res, buf, encoding) {
                req.rawBody = buf;
            }
        }))
        
    }
    
    private setupRoutes() {
        this.app.use('/', exampleRouter1);
        this.app.use('/prot', exampleRouter2);
    }
}

export default new App().app;


/*
This is a generic error catcher in case you need one.

this.app.use(function (err: any, req: any, res: any, next: any) {
    console.log("caught error!");
    res.status(400).send({
        "status": "400"
    });
});
*/