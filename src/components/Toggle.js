import { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

const Toggle = () => {
  const { nightMode, handleToggle } = useContext(LayoutContext);
  return (
    <div>
      <button onClick={handleToggle}>
        change to {nightMode ? ( 
          <img src="/images/dark.png" alt="dark-icon" />
        ) : (
          <img src="/images/light.png" alt="light-icon" />
        )}{" "}
      </button>
    </div>
  );
};

export default Toggle;
