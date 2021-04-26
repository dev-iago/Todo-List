import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import StoreContext from '../../../services/Context'
import {TextField, Button} from '@material-ui/core'

import './styles.css'
import api from '../../../services/api';

function Login(){
  const [inputText, setInputText] = useState('')
  const { setToken } = useContext(StoreContext);
  const history = useHistory(); 

  async function handleLogin(){
    try{
      const response = await api.get(`/users/${inputText.trim()}`);

      if(response.status === 200){
        setToken('123');
        return history.push('/home')
      }
      
    }catch(err){
      alert('User not found')
    }
  }

  async function handleRegister(){
    try{
      const body = {email: inputText}
      const response = await api.post(`/register`, body);

      if(response.status === 200){
        setToken('123');
        return history.push('/home')
      }
    }catch(err){
      alert('User already exists!')
    }
  }

  return(
    <div className="login-container">
      <form 
        className="login-container-background"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h1>Helcome to the To Do List</h1>
        <br/>

        <>
          <TextField 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
            placeholder="User name" 
            required 
            variant='outlined'
          />
          
          <Button className="button" variant="contained" type="submit">
            <span>Login</span>
          </Button>
        </>
        <span>or</span>
        <Button className="button" variant="contained" onClick={() => handleRegister()} >
          <span>Register</span>
        </Button>
      </form>
    </div>
  )
}

export default Login