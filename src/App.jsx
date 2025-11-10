import { RouterProvider } from 'react-router-dom'
import './App.scss'
import { Toaster } from "react-hot-toast";
import root from './routers/root'
import './Tailwind.css';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={root}/>
    </>
   
  )
}

export default App
