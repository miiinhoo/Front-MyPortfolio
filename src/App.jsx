import { RouterProvider } from 'react-router-dom'
import './App.scss'
import root from './routers/root'

function App() {
  return (
   <RouterProvider router={root}/>
  )
}

export default App
