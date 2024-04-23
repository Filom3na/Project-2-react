import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
//Import page specific components 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


//Styles (Style related componenets- Bootstrap and SASS)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './styles/main.scss'


//Page Components (This will help connect the external files from components folder)
import Movies from './components/Movies.jsx'
import SingleMovie from './components/SingleMovie.jsx';
import Favourites from './components/Favourites.jsx';
import Watched from './components/Watched.jsx';


//Router (This is for the page routing)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
      path: '',
      element: <Movies />
      },
      {
      path: '/:id',
      element: <SingleMovie/>
      },
      {
        path: 'favourites',
        element: <Favourites />
      },
      {
        path: 'watched',
        element: <Watched />
      }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router= {router}/>
	</React.StrictMode>
)