import { ApolloClient, gql, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react'
import PersonaItem from '../components/PersonaItem'

const Personas = ({ success, datagql, error }) => {
    return (
        <div id='main' className="w-full h-screen text-center">
            <div className='max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <PersonaItem success={success} datagql={datagql} error={error} />
            </div>
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