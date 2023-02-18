const express = require("express");
const { buildSchema } = require("graphql");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

// 数据库连接
mongoose.connect("mongodb://localhost:27017/student", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
// 限制数据库films集合表 只能存三个字段
const FilmModel = mongoose.model(
  "film",
  new mongoose.Schema({
    name: String,
    poster: String,
    price: Number,
  })
);
const Schema = buildSchema(`
    type Film {
        id: String,
        name: String,
        poster: String,
        price: Int
    }
    input FilmInput {
        name: String,
        poster: String,
        price: Int
    }
    type Query {
        getNowPlayingLisat: [Film]
    }
    type Mutation {
        addFilm(input: FilmInput):Film
        updateFilm(id:String!, input: FilmInput):Film
        deleteFilm(id:String!):String
    }
`);
/*
    1.创建模型
    2.操作数据库
    */
const root = {
  getNowPlayingLisat: () => {
    console.log(FilmModel.find())
    return FilmModel.find()
  },
  addFilm({ input }) {
    return FilmModel.create({
      ...input,
    })
  },
  updateFilm({ id, input }) {
    return FilmModel.updateOne({
        _id: id
    }, {
        ...input
    }).then(() => FilmModel.findOne({_id: id}))
  },
  deleteFilm({ id }) {
    return FilmModel.deleteOne({_id: id}).then(() => '删除成功,111')
  },
};

app.use(
  "/graphql",
  graphqlHttp({
    // 对后端处理的对象
    schema: Schema,
    // 传给前端的对象
    rootValue: root,
    // 查询器
    graphiql: true,
  })
);
// 配置静态资源目录
app.use(express.static('public'))

app.listen(3000, () => {
  console.log("服务已开启,3000");
});
