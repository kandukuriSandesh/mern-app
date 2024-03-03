import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import Username from './components/Username';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username name = {"Sandesh"}/>,
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:"/password",
    element:<Password/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/recovery",
    element:<Recovery/>
  },
  {
    path:"reset",
    element:<Reset/>
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router} >
      <div>React App

      </div>
      </RouterProvider>
    </>
  )
}

export default App
