import{useState} from 'react'

import './styles.css'
import  TodoList  from '../../components/TodoList';
import  CreateProjectComponent  from '../../components/CreateProject';

function Home() {
  const [numberOfLists, setNumberOfLists] = useState([{id: '0', name: ''}])
  return (
    <div className="App">
      
      <div className="component-list">
        
          {numberOfLists.map((item, index) =>  item.id !== '0' &&
          <TodoList key={item.id} setNumberOfLists={setNumberOfLists} numberOfLists={numberOfLists} indexToRemove={index} initalName={item.name}/>
        )}
        <CreateProjectComponent setNumberOfLists={setNumberOfLists} numberOfLists={numberOfLists}/>
      </div>
    </div>
  );
}

export default Home;