# express-webpack-graphql
I had ~~99~~ 3 problems:
- I wanted to try out GraphQL using the neat [graphiql IDE](https://github.com/graphql/graphiql)
- I wanted to use Express so I could use the very handy [express-graphiql server middleware](https://github.com/graphql/express-graphql)
- I wanted to code in ES6 compiled with Babel and Webpack

My solution was yet another Javascript/Webpack boilerplate since I found this kind of painful to set up and am hoping others wanting to prototype schema and play around with GraphQL will find it useful!


## How To Use
- Clone the repo: `git clone `
- Install dependencies: `npm i`
- Run: `npm start`
- Head to `localhost:3000` in your favorite browser

## Included
- `src/index.js` runs an Express server on port 3000 with the graphiql IDE set up via middleware
- `webpack.config.js` bundles ES6 into `bin/bundle.js`


## Not Included
- An actual GraphQL schema (there's a placeholder file)
- Actual data (there's a placeholder file but no actual data)

## You didn't need to do all this/there's a better way
- PRs welcome!
