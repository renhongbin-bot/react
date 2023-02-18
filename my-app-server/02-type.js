const express = require("express");
const { buildSchema } = require("graphql");
const graphqlHttp = require("express-graphql");

const Schema = buildSchema(`
    type Account {
        name: String,
        age: Int,
        location: String,
        phone: Int
    }
    type Film {
        id: Int,
        name: String,
        poster: String,
        price: Int
    }
    type Query {
        hello: String,
        getName: String,
        getAge: Int,
        getAllNames: [String],
        getAllAges: [Int],
        getAccountInfo: Account,
        getNowPlayingLisat: [Film]
        getFilmDetail(id:Int!): Film
    }
`);

const faskDb = [
  {
    id: 1,
    name: "aaaa",
    poster: "http://www.adsad.com",
    price: 100,
  },
  {
    id: 2,
    name: "bbbb",
    poster: "http://www.sadll.com",
    price: 80,
  },
  {
    id: 3,
    name: "cccc",
    poster: "http://www.svideo.com",
    price: 200,
  },
];

const root = {
  hello: () => {
    // 通过数据库查询
    const str = "hellow word111";
    return str;
  },
  getName: () => {
    return "rhb";
  },
  getAge: () => {
    return 23;
  },
  getAllNames: () => {
    return ["ken", "xm", "zs", "lw"];
  },
  getAllAges: () => {
    return [23, 32, 19, 91];
  },
  getAccountInfo: () => {
    return {
      name: "rhb",
      age: 23,
      location: "admin",
      phone: 121191123,
    };
  },
  getNowPlayingLisat: () => {
    return faskDb
  },
  getFilmDetail: ({id}) => {
    return faskDb.find(item => item.id === id)
  }
};
const app = express();

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

app.listen(3000, () => {
  console.log("服务已开启,3000");
});
