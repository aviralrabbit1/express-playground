# express-playground

### Initialise Project 
```
npm init -y
```

### Install **`express`** 
```
npm install express
```

### Install **`nodemon`** 
#### (as devDependency, needed while/for development, but not for running the project) with 
```
npm install nodemon --save-dev
```

### Middelware
```
app.use(funcition, (req, res, next) => {

})
```
Middelware endpoint will use app.METHOD(req, res)

### Controller module
- one for each collection of data (friends and messages)

### Models
- To access the data from anywhere(controllers and/or view)

### Express Router
- we can mount a group of path under a specific route

### REST 
`RE`presentational `S`tate `T`ransfer
- **`RE & S:`** how the server makes data available
- **`T:`** how its sent back to user

### RESTful APIs
- Use existing standards(HTTP, JSON, URL)
- Http Endpoints represent collection of data on server side
- Use GET, PUT, POST, DELETE http methods performed on the data
- **Client and server architecture**
    - **`Stateless:`** 
        - Each request is separate to any state on client not included in request
        - Only keep track of data in our collection and not at any session independent of state of client
        - it's opposite will be an API which tracks user data in a session from requests to the server. Eg. session variable in PHP. Not wanted in restful APIs.
    - **`Cacheable:`**
        - We can cache our request because they keep track of our state, saving results for future use
        - minimize work needed to do and increase performance
