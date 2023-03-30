import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HotelsPage from "./pages/HotelsPage";
import ResultsPage from "./pages/ResultsPage";
import List from "./pages/List";
import Homepage from "./pages/Homepage";
import CoverFrame from "./pages/CoverFrame";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/results-page":
        title = "";
        metaDescription = "";
        break;
      case "/list":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/coverframe":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HotelsPage />} />
      <Route path="/results-page" element={<ResultsPage />} />
      <Route path="/list" element={<List />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/coverframe" element={<CoverFrame />} />
    </Routes>
  );
}
export default App;
