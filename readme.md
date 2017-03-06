# react-webpack-boilerplate [![Build Status][travis-badge]][travis] [![Coverage Status][coveralls-badge]][coveralls]
> Simple production-ready boilerplate for [React](http://facebook.github.io/react/) and [Webpack](http://webpack.github.io/) (SASS and React hot reloading) and tests with Jest.

Note: if you want React server-side rendering support, take a look at my personal site repo based on this: [github.com/srn/srn.io](https://github.com/srn/srn.io)

## Install

Clone repository and run:

```sh
$ npm install
```

## Requirements

node 5+

## Development

```sh
$ npm start
```

Go to [http://localhost:3001](http://localhost:3001) and see the magic happen.

## Production

If you want to run the project in production, set the `NODE_ENV` environment variable to `production`.

```sh
$ NODE_ENV=production npm start
```

Also build the production bundle:

```sh
$ npm run dist
```

## Tests

```sh
$ npm test
```

Only run specific tests

```sh
$ npm test -- NotFoundComponent
```

Coverage

```sh
$ npm test -- --coverage
```

## Author

Paul Kane

## Boilerplate

MIT © [Søren Brokær](http://srn.io)