import React, { useReducer } from 'react';

import AppRouter from './routers/AppRouter';
import userReducer from './reducers/userReducer';
import { UserContext } from './context/userContext';


const  init = () =>  localStorage.getItem('user') || { isLogged: false }


function App() {

  const [state, dispatch] = useReducer( userReducer , { }, init );


  return (

      <UserContext.Provider value={{ state, dispatch }} >
        <AppRouter />
      </UserContext.Provider>

  );
}

export default App;
