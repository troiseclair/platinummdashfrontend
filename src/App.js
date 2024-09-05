import './App.css';
import { useState } from "react";
import LayoutContextProvider from "./context/LayoutContext";
import RouterHelper from "./RouterHelper";

function App() {
  return (
    <>
      <LayoutContextProvider>
        <RouterHelper />
      </LayoutContextProvider>
    </>
  );
}

// const App = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   return (
//     <div>
//       <p>{isLogin ? 'Anda Sudah Login' : 'Anda Belum Login'}</p>
//       <layoutContextProvider>
        
//       </layoutContextProvider>
//     </div>
//   );
// }

export default App;
