import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import ActionsPage from "./pages/ActionsPage";
import HooksPage from "./pages/HooksPage";
import ServerPage from "./pages/ServerPage";
import MetadataPage from "./pages/MetadataPage";
import SandboxPage from "./pages/SandboxPage";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="actions" element={<ActionsPage />} />
            <Route path="hooks" element={<HooksPage />} />
            <Route path="server" element={<ServerPage />} />
            <Route path="metadata" element={<MetadataPage />} />
            <Route path="sandbox" element={<SandboxPage />} />
            <Route
              path="*"
              element={<div className="p-10 text-center">Coming Soon</div>}
            />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
