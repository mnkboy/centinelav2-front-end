import Head from "next/head";
import Main from "./Main";
import { React } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "http://172.17.0.1:3008/query",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTc1NzcwMjgsImlkIjoiZDI5ODA0NWQtMmM2ZC00YmE0LTgyOGQtZTZlYjk3YzRiN2Q1IiwibmFtZSI6IkFkbWluaXN0cmFkb3IgQmlsbGluZyIsInVzZXJuYW1lIjoiYWRtaW4ifQ.ozLaKmZu9Y1VcKT92zI8SpiWSTH-nda2sXQ5BFr2AZo';
  // return the headers to the context so httpLink can read them
  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
      }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function Home() {
	return (
		<div>
			<ApolloProvider client={client}>
				<Head>
					<title>Centinel | Software</title>
					<meta name="description" content="Centinel Sofware" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Main />				
			</ApolloProvider>
			,
		</div>
	);
}
