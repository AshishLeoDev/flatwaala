import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import Loading from "./templates/loaders/Loading";

function App() {
  const HomeScreen = lazy(() => import("./Pages/HomePage/HomeScreen"));
  const HeaderTopSlider = lazy(() =>
    import("./templates/headers/HeaderTopSlider")
  );
  const Navbar = lazy(() => import("./templates/headers/Navbar"));
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <HeaderTopSlider />
        <nav className="bg-black text-white">
          <Navbar />
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </Suspense>
    </Router>
  );
}

export default App;
