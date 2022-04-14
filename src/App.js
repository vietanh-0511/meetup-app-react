import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetUpPage from "./pages/AllMeetUp";
import FavoriteMeetUpPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpPage />} />
        <Route path="/favorites" element={<FavoriteMeetUpPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
