import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx';
import Login from './components/auth/login.jsx';
import Signup from './components/auth/Signup.jsx';
import Home from './components/Home.jsx';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  
])
const App = () => {
  return (
    <>
    <RouterProvider router={appRouter}/>

    </>
  )
}

export default App;