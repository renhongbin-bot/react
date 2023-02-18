import React from "react";

// 报错*********************************************************未解决
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  useQuery,
  gql,
} from "@apollo/client";
// 后端配置信息
export default function App() {
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <RQuery></RQuery>
    </ApolloProvider>
  );
}
function RQuery() {
  let GET_LIST = gql`
    query {
      getNowPlayingLisat {
        id,
        name,
      }
    }
  `;
  console.log(useQuery(GET_LIST))
  // const { loading, error, data } = useQuery(QUERY);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  // return data.getNowPlayingLisat.map(({ id, name, price }) => (
  //   <div key={id}>
  //     <h2>{name}</h2>
  //     <p>{price}</p>
  //   </div>
  // ));
}
