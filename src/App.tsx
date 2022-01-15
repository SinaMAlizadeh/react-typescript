import React from "react";
import "./App.css";
import Private from "./components/Auth/Private";
import Profile from "./components/Auth/Profile";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/list";
import { Greet } from "./components/Greet";
import CustomeButton from "./components/Html/CustomeButton";
import MutableRef from "./components/ref/MutableRef";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <MutableRef />

      <Private isLoggedin={true} component={Profile} />
      <CustomeButton variant="primary">zsdasd</CustomeButton>
    </div>
  );
}

export default App;
