import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import StoreContext from '../../services/Context'
import './styles.css';
import {TextField, Button} from '@material-ui/core'

interface CreateProjectProps {
  setNumberOfLists: (arg0: {id: string; name: string}[]) => void,
  numberOfLists: {id: string; name: string}[],
}

let counter = 1;

export default function CreateProjectComponent({setNumberOfLists, numberOfLists}: CreateProjectProps ) {
  const [newProjectName, setNewProjectName] = useState('')
  const { setToken } = useContext(StoreContext);
  const history = useHistory(); 


  return (
      <form 
        className="container"
        
        onSubmit={(e) =>{ 
          e.preventDefault()
          setNumberOfLists([...numberOfLists, {id: `${counter++}`, name: `${newProjectName}`}])
        }}
      >
        <h3>Create a new project</h3> <br/>
        <TextField 
          value={newProjectName} 
           onChange={(e) => setNewProjectName(e.target.value)} 
          placeholder="Project name" 
          required 
          variant='outlined'
        />
        <br/>
        <Button className="button" variant="contained" type="submit">
          <span>Create Project</span>
        </Button>

        <br/>
        <Button variant="outlined" onClick={() => {setToken(''); history.push('/')}}>
          <span>Log out</span>
        </Button>
      </form>
  );
}
