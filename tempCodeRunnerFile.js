app.use(session({
    secret : "yoo yooo", resave : true , saveUninitialized : false,

    cookie : {
        httpOnly : true, //does not allow client side script to see cookies. prevent xss
        sameSite : 'strict' //same origin for cookies, pervent CSRF
    }
}))
