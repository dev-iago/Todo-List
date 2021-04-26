import { useState } from 'react'
import './styles.css';
import {TextField, IconButton} from '@material-ui/core'
import Check from '@material-ui/icons/Check'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Checkbox from '@material-ui/core/Checkbox';

interface ItemList {
  value: string,
  id: number,
  checked: boolean,
}

interface TodoListProps {
  setNumberOfLists: (arg0: {id: string; name: string}[]) => void,
  numberOfLists: {id: string; name: string}[],
  indexToRemove: number
  initalName: string
}

let counter = 1;

export default function TodoList({setNumberOfLists, numberOfLists, indexToRemove, initalName}: TodoListProps) {
  const [disable, setDisable] = useState(true)
  const [newTaskText, setNewTaskText] = useState('')
  const [listTasks, setListTasks] = useState<ItemList[]>([{value: '', id: 0, checked:true}])
  const [listDone, setListDone] = useState<ItemList[]>([{value: '', id: 0, checked:true}])
  const [listName, setListName] = useState(`${initalName}`)

  function handleCheckChange(checked: boolean, item: ItemList){
    if(listTasks !== undefined){
    const newItem = listTasks.map(prevItem => prevItem.id === item.id ? {...item, checked} : prevItem )
    setListTasks(newItem)
  }}

  return (
    <div className="list-container">
      <form 
        onSubmit={(e) =>{ e.preventDefault(); setDisable(!disable)}}
        className="list-container-header"
      >
        <TextField 
          value={listName} 
          onChange={(e) => setListName(e.target.value)} 
          disabled={disable} 
          placeholder="Nome da lista" 
          required 
        />
      
        <div>
          <IconButton size='small' type="submit" >
            <EditIcon />
          </IconButton>

          <IconButton onClick={() => {
            numberOfLists.splice(indexToRemove,1);
            setNumberOfLists([...numberOfLists]);
          }}
            size='small'
            >
            <DeleteIcon/>
          </IconButton>
        </div>
      </form>

      <div className="list-container-items">
        <span>To Do</span>
        <div className="list-container-items-tasks">
          {
            listTasks.map((item, index) => ( item.id !== 0 &&
            <div key={item.id}>
              <Checkbox
                color='primary'
                size="small"
                checked={item.checked}
                onChange={():void | boolean => handleCheckChange(!item.checked, item)}
              />
            <span>{item.value}</span>
            {item.checked === true &&
            <> 
              <IconButton 
                onClick={() => {
                  listTasks.splice(index,1)
                  setListTasks([...listTasks])
                }}
                size='small'
              >
                <DeleteIcon/>
              </IconButton>
              <IconButton 
                onClick={() => {
                  listTasks.splice(index,1)
                  setListTasks([...listTasks])
                  setListDone([...listDone, item ])
                }}
                size='small'
              >
                <Check/>
              </IconButton>
            </>
            }
          </div>
          ))}
        </div>
        <span>Done</span>
        <div className="list-container-items-tasks">
          {
            listDone.map((item, index) => ( item.id !== 0 &&
            <div key={item.id}>
              <Checkbox
                color='primary'
                size="small"
                checked={true}
              />
            <span>{item.value}</span>
          </div>
          ))}
        </div>
      </div>

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          if(listTasks !== undefined){
          setListTasks([...listTasks, {value: newTaskText, checked:false, id: counter++}]);
        }}} 
        className="list-container-input"
      >
        <TextField 
          value={newTaskText} 
          placeholder="Task" 
          required
          onChange={(e): void => setNewTaskText(e.target.value)}
        />
        <IconButton type="submit" style={{ color: 'green'}}>
            <AddBoxIcon fontSize='large'/>
        </IconButton>
      </form>
    </div>
  );
}
