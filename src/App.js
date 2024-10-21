import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homes";

function App() {
  return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
         </Routes>
      </>
  );
}

export default App;
