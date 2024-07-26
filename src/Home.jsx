import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CategoryPage } from "./pages/CategoryPage"
import { HomePage } from "./pages/HomePage"
import { FavoritePage } from "./pages/FavoritePage"
import { Library } from "./pages/Library"
import { Settings } from "./pages/Settings"


export const Home = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categoty" element={<CategoryPage />} />
            <Route path="/favorite" element={<FavoritePage/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
    </Router>
  )
}
