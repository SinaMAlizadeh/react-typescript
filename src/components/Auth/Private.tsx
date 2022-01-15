import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PriavteProps = {
  isLoggedin: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedin, component: Component }: PriavteProps) => {
  if (isLoggedin) {
    return <Component name="sina" />;
  } else {
    return <Login />;
  }
};

export default Private;
