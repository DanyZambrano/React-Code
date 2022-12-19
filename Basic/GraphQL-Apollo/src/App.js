import { useQuery, gql } from "@apollo/client"
import './App.css';

function App() {

  const GET_LIST = gql`
    query {
        characters{
            results{
                id,
                name,
                species,
            }
        }
    }
  `

  const { data, loading, error } = useQuery(GET_LIST);
  if (loading) return 'Cargando...';
  if (error) return `Error! ${error.message}`;


  return (
    <div>
    {
      data.characters.results.map(item => {
        return(
            <div key={item.id} style={{display: 'flex', flexDirection: 'row'}}>
                <h2>{item.id}.  </h2>
                <h2>{item.name}-(</h2>
                <h2>{item.species})</h2>
            </div>    
        )
      })  
    }
    </div>
  )
}

export default App;

