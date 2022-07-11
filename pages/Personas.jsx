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

export default function Personas({ success, datagql, error }) {
    console.log("success: ",success);
    console.log("datagql: ",datagql);
    console.log("error: ",error);
  return (
    <div id='personas' className="divide-y divide-slate-100">
      <Nav >
        <NavItem href="/new" isActive>New Releases</NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>        
        <SearchBar></SearchBar>
      </Nav>
      <List>
        {datagql.map((persona) => (
          <ListItem key={persona.id} person={persona} />
        ))}
      </List>
      {/* <AddPerson></AddPerson> */}
    </div>
  )
}

export async function getStaticProps() {
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

    try {
        const { data, errors } = await client.query({
            query: gql`
            query retrievePerson{
                    retrievePerson(input:{
                        name:""
                    }){
                        ...PersonResponse
                    }
                }

                fragment PersonResponse on Person{
                        id
                        name
                        lastname
                        motherlastname
                        rolid
                        rol{
                            id
                            description
                        }
                        addressid
                        address{
                            id
                            city
                            street
                            crossone
                            crosstwo
                            number
                            suburb
                        }
                        additionalinfoid
                        additionalinfo{
                            id
                            numberoftrips
                            leader
                        }
                        politicalorientationid
                        politicalorientation{
                            id
                            politicalorientationname
                            isdead
                            vote
                        }
                        politicallocationid
                        politicallocation{
                            id
                            section
                        }
                        listsupports{
                            id
                            personid
                            concept
                            description
                            supporttype
                            quantity
                            project
                            administrationsupportid
                            administrationsupport{
                                id
                                administration
                                president
                            }
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