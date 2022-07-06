import { ApolloClient, gql, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react'
import Movies from '../components/movies/Movies';
import PersonaItem from '../components/PersonaItem'

const movies = [
    {
        "id": "1",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "2",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "3",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "4",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "5",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "6",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "7",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "8",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "9",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "10",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "11",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
    {
        "id": "12",
        "image": "https://picsum.photos/600",
        "title": "Prognosis Negative",
        "starRating": "2.66",
        "rating": "PG-13",
        "year": "2021",
        "genre": "Comedy",
        "runtime": "1h 46m",
        "cast": "Simon Pegg, Zach Galifianakis",
    },
]

const Personas = ({ success, datagql, error }) => {
    console.log(datagql);
    return ( 
        
        <div id='personas' className="w-full overflow-auto md:overflow-scroll justify-between h-screen p-2 py-16">
            
            <Movies  movies={movies} />        
            
        </div>

    )
}

export default Personas

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
                        name:"Javier Armando"
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