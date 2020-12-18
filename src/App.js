import React, { createContext, useState } from "react";
import Routes from "./components/Routes/Routes";

import "./App.css";

export const AuthContext = createContext();

const App = () => {
   const [loggedInUser, setLoggedInUser] = useState(false);

   return (
      <AuthContext.Provider value={[loggedInUser, setLoggedInUser]}>
         <Routes />
      </AuthContext.Provider>
   );
};

export default App;
