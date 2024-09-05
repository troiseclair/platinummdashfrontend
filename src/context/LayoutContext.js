import { createContext, useState } from "react";

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
  const [data, setData] = useState({
    nightMode: false,
    day: {
      color: "#45474B",
      background: "#F5F7F8",
    },
    night: {
      color: "#F5F7F8",
      background: "#201E43",
    },
  });

  const handleToggle = () => {
    console.log("data.nightMode", data.nightMode);
    setData((prevState) => ({
      ...prevState,
      nightMode: !data.nightMode,
    }));
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <LayoutContext.Provider
      value={{ ...data, handleToggle, isLoggedIn, handleLoggedIn }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;