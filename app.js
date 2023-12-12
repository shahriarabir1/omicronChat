const express = require("express");
const userRouter = require("./Router/userRouter");
const loginRouter=require("./Router/loginRouter.js")
const inboxRouter=require("./Router/inboxRouter.js")
const path = require("path");
const cookieParser = require("cookie-parser");
const { notFoundHandler, errorHadler } = require("./utils/errorHandler");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));



app.use(cookieParser(process.env.COOKIE_SECRET));


app.use('/',loginRouter)
app.use("/users", userRouter);
app.use("/inbox",inboxRouter)
app.use(notFoundHandler);
app.use(errorHadler);

module.exports = { app };
