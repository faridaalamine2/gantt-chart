import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ChartPage from "./pages/ChartPage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chart" element={<ChartPage />} />
        </Routes>
    );
}

export default App;
