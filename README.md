# locally-server

[![Build Status][travis-image]][travis-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A JSON file RESTful API with authorization based on [json-server](https://github.com/typicode/json-server) for [zce/weapp-locally](https://github.com/zce/weapp-locally) & [zce/quickapp-locally](https://github.com/zce/quickapp-locally)

## Usage

```sh
# clone repo
$ git clone https://github.com/zce/locally-server.git <my-api-server>

# change directory
$ cd <my-api-server>

# install dependencies
$ yarn # or npm install
```

modify [database.json](database.json) file

```sh
# serve with hot reload at http://localhost:3000
$ yarn dev
```

## JSON Server Resources Endpoints

- Comments: `/comments/:id?`
- Posts: `/posts/:id?`
- Terms: `/terms/:id?`
- Users: `/users/:id?`
- Options: `/options/:id?`

To access and modify resources, you can use any HTTP method: `GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS`

## Backdoor Endpoints

### GET `/backdoor/delay`

add a delay of 1000ms for each endpoint

```sh
$ curl http://localhost:3000/backdoor/delay
```

## License

[MIT](LICENSE) &copy; [汪磊](http://zce.me)



[travis-image]: https://img.shields.io/travis/zce/locally-server.svg
[travis-url]: https://travis-ci.org/zce/locally-server
[dependency-image]: https://img.shields.io/david/zce/locally-server.svg
[dependency-url]: https://david-dm.org/zce/locally-server
[devdependency-image]: https://img.shields.io/david/dev/zce/locally-server.svg
[devdependency-url]: https://david-dm.org/zce/locally-server?type=dev
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[style-url]: http://standardjs.com/
