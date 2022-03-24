import React from "react";
import {useRoutes} from 'react-router-dom'
import Cardview from "./common/cardview";
import Cardview1 from "./common/cardview";
import Model from "./common/model";
import Management from "./pages/management/management";
// import Settings from "./pages/Settings/settings";
function App() {

  const route=useRoutes([
    {path:'/uhvb',element:<Management/>},
    {path:'/mo',element:<Model/>},
    
    {path:'/',element:<Cardview1/>},
  ]

  )
  return route
  

}

export default App;
