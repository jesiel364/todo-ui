import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux'
import store from './redux/store'

import { GlobalStyle } from './Global'
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import Home from './pages/Home/index'
import Detail from './pages/Detail/index'
import NewTask from './pages/NewTask/index'
  
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
      {
        path: '/new',
        element: <NewTask />,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalStyle />
   <Provider store={store}>
    <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>
)
