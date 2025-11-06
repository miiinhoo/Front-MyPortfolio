import { RouterProvider } from 'react-router-dom'
import './App.scss'
import root from './routers/root'
import './Tailwind.css';

function App() {
  return (
   <RouterProvider router={root}/>
  )
}

export default App
