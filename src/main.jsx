import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
import Contact from './assets/components/Contact/Contact.jsx';
import Users from './assets/components/Users/Users.jsx';
import Details from './assets/components/Details/Details.jsx';
import Posts from './assets/components/Posts/Posts.jsx';
import PostDetailes from './assets/components/PostDetails/PostDetailes.jsx';
import Error from './assets/components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path:"/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Details></Details>
      },
      {
        path:"/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>
      },
      {
        path:"/post/:postId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetailes></PostDetailes>
      }
    ]
  },
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
