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