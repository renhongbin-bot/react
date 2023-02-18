const express = require("express");
const { buildSchema } = require("graphql");
const graphqlHttp = require('express-graphql')

const Schema = buildSchema(`
    type Query {
        hello: String,
        getName: String,
        getAge: Int
    }
`);

const root = {
    hello: () => {
        // 通过数据库查询
        const str = 'hellow word111'
        return str
    },
    getName: () => {
        return 'rhb'
    },
    getAge: () => {
        return 23
    }
}
const app = express();

app.use("/home", function (req, res) {
  res.send("home data");
});
app.use("/list", function (req, res) {
  res.send("list data");
});

app.use("/graphql", graphqlHttp({
    // 对后端处理的对象
    schema: Schema,
    // 传给前端的对象
    rootValue: root,
    // 查询器
    graphiql: true
}));

app.listen(3000, () => {
  console.log("服务已开启,3000");
});
