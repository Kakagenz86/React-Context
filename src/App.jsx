import HomePages from "./pages/HomePages"
import MenuPages from "./pages/MenusPages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/menus" element={<MenuPages />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App
