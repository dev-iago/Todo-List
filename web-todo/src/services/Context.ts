import { createContext} from 'react'

const StoreContext = createContext({
  token: null,
  setToken: (arg0: string) => {}
})

export default StoreContext