import {env} from "../env";
import {Router, Request, Response, NextFunction} from "express";
import {AuthRequest} from "../models/AuthRequest";
import * as jwt from "jsonwebtoken";


class secured {
    
    router: Router
    
    constructor() {
        this.router = Router();
        this.init();
    }
    
    public protectedTest(req: AuthRequest, res: Response, next: NextFunction) {
        res.send({
            "status": "OK",
            "token-data": req.user
        });
    }
    
    public getToken(req: Request, res: Response, next: NextFunction) {
        const someID = req.body.some_id;
        if (someID == null) {
            return res.sendStatus(400);
        }
        
        const token = secured.createJWT(someID);
        res.send({
            "status": "OK",
            "token": token
        });
    }
    
    private verifyJWT(req: AuthRequest, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) {
            return res.sendStatus(401);
        }
        
        jwt.verify(token, env.JWT_SECRET, (err: any, user: any) =>{
            if (err) {
                return res.sendStatus(401);
            }
            
            req.user = user;
            next();
        });
    }
    
    private static createJWT(some_id: String) {
        return jwt.sign(some_id, env.JWT_SECRET, {});
    }
    
    private init() {
        this.router.get('/test', this.verifyJWT, this.protectedTest);
        this.router.get('/create', this.getToken);
    }
}

export default new secured().router;