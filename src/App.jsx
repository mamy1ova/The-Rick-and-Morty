import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import CharacterDetails from "./components/CharacterDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/character/:characterId" element={<CharacterDetails />} />
    </Routes>
  );
};

export default App;
