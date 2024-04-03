import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import PublicationsPage from "./Pages/PublicationsPage";
import { createContext, useState } from "react";
import Editor from "./Pages/Editor";

export const publicationContext = createContext();

function App() {
  const [publication, SetPublication] = useState("");

  return (
    <publicationContext.Provider value={{ publication, SetPublication }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/publication" element={<PublicationsPage />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </publicationContext.Provider>
  );
}

export default App;
