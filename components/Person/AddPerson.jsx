import { gql, useMutation } from '@apollo/client';

const ADD_PERSON = gql`
    mutation createPerson{
        createPerson(input:{
            name:"Marcos Arturo"
            lastname:"Beltran"
            motherlastname:"Leiva"
        })
    }
`;

function AddPerson() {
    let input;
    const [addTodo, { data, loading, error }] = useMutation(ADD_PERSON);
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { type: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

export default AddPerson