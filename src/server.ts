import {env, load_env} from "./env";
load_env();

import app from "./app";


const port = env.PORT;

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});