import {Router, Request, Response, NextFunction} from "express";


class simple {
    
    router: Router
    
    constructor() {
        this.router = Router();
        this.init();
    }
    
    public returnJSON(req: Request, res: Response, next: NextFunction) {
        res.send({
            "status": "OK"
        });
    }
    
    private init() {
        this.router.get('/test', this.returnJSON);
    }
}

export default new simple().router;