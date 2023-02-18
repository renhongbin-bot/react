const express = require("express");
const { buildSchema } = require("graphql");
const graphqlHttp = require("express-graphql");

const Schema = buildSchema(`
    type Film {
        id: Int,
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
        updateFilm(id:Int!, input: FilmInput):Film
        deleteFilm(id:Int!):Int
    }
`);

let faskDb = [
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
  getNowPlayingLisat: () => {
    return faskDb;
  },
  addFilm({input}) {
    const obj = {...input, id: faskDb.length + 1}
    faskDb.push(obj)
    return obj
  },
  updateFilm({id, input}) {
    let current = null
    faskDb = faskDb.map(item=> {
        if(item.id === id) {
            current = {...item, ...input}
            return {...item, ...input}
        }
        return item
    })
    return current
  },
  deleteFilm({id}) {
    faskDb = faskDb.filter(item => item.id !== id)
    return 1
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
