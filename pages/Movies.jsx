import { ApolloClient, gql, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Nav from '../components/Movies/Nav.jsx'
import NavItem from '../components/Movies/NavItem.jsx'
import SearchBar from '../components/Movies/SearchBar.jsx'
import List from '../components/Movies/List.jsx'
import ListItem from '../components/Movies/ListItem.jsx'
import AddPerson from '../components/Person/AddPerson.jsx';

const MoviesArr = [
    {
        id:"1",
        image: "https://picsum.photos/600",
        title: "Prognosis Negative",
        starRating: "2.66",
        rating: "PG-13",
        year: "2021",
        genre: "Comedy",
        runtime: "1h 46m",
        cast: "Simon Pegg, Zach Galifianakis",
    },
    {
        id:"2",
        image: "https://picsum.photos/600",
        title: "Prognosis Negative",
        starRating: "2.66",
        rating: "PG-13",
        year: "2021",
        genre: "Comedy",
        runtime: "1h 46m",
        cast: "Simon Pegg, Zach Galifianakis",
    },
    {
        id:"3",
        image: "https://picsum.photos/600",
        title: "Prognosis Negative",
        starRating: "2.66",
        rating: "PG-13",
        year: "2021",
        genre: "Comedy",
        runtime: "1h 46m",
        cast: "Simon Pegg, Zach Galifianakis",
    },
    {
        id:"4",
        image: "https://picsum.photos/600",
        title: "Prognosis Negative",
        starRating: "2.66",
        rating: "PG-13",
        year: "2021",
        genre: "Comedy",
        runtime: "1h 46m",
        cast: "Simon Pegg, Zach Galifianakis",
    },
]

export default function Movies() {
  return (
    <div className="divide-y divide-slate-100">
      <Nav >
        <NavItem href="/new" isActive>New Releases</NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>        
        <SearchBar></SearchBar>
      </Nav>
      <List>
        {MoviesArr.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
      <AddPerson></AddPerson>
    </div>
  )
}

export async function getStaticProps() {
    const httpLink = createHttpLink({
        uri: "http://172.17.0.1:3008/query",
    });

    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTcxNjI2MjIsImlkIjoiOWQ1M2E0YmMtZDczNS00MDNlLTk5NDktYzM3ZDJmOWRiMTlkIiwibmFtZSI6IkFkbWluaXN0cmFkb3IgQmlsbGluZyIsInVzZXJuYW1lIjoiYWRtaW4ifQ.5Ser0EBkqsgDVx-YYR8Dts0vmGWG07w8TsO1p1aG__c';
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

    try {
        const { data, errors } = await client.query({
            query: gql`
            query retrievePerson{
                    retrievePerson(input:{
                        name:""
                    }){
                        id
                        name
                        lastname
                        motherlastname
                    }
                }
      `,
        });

        return {
            props: {
                success: true,
                datagql: data.retrievePerson,
            }
        }

    } catch (error) {
        return {
            props: {
                success: false,
                error: error.message
            }
        };
    }

}