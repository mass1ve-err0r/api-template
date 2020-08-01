# api-template
> Simple Stack combining TS, ExpressJS & JWT + Examples

## In A Nutshell
This is essentially a basic stack to get started with creating RESTful APIs with Typescript, backed by ExpressJS and secured with JWTs.

There is no massive overhead, you can simply clone this repository and get started. 

For those who are new to this, router -examples are also included.
- This does __not__ replace following a regular tutorial if you're a newbie, please use this as help/ learning material instead of replacement in that case!

## Components
- TypeScript _(duh.)_
- ts-node & ts-node-dev
- ts-dotenv
- jsonwebtoken
- helmet
- express
- body-parser


### Appendix A: ts-dotenv
I quite liked ts-dotenv because you're essentially also creating a class to export your .env vars in a more explicit fashion.
A `.env` is not included but essentially you'll just create it at the root of the project _(not inside `/src`)_ and declare the variable's explicit type inside `/src/env.ts`.

Simple `.env` Example :
```
# This is a comment btw
PORT=8000
JWT_SECRET=my_super_secret
```

Corresponding entry inside `/src/env.ts` :
```
export const schema = {  
  PORT: Number,  
  JWT_SECRET: String  
};
```

### Appendix B: Safety + Comments
- __PLEASE USE A STRONG JWT_SECRET__
- The included gitignore should cover you
	- macOS, Windows, Linux, Node, dotenv, JeBrains IDEs (all), VisualStudioCode
- I'm _not_ a TS expert mself but why not share something useful even if minimal


## License
This template is licensed under the MIT License. Feel free to fork, adapt/ modify or whatever!
