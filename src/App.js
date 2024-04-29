import CheckBoxPage from "./CheckBoxPage";
import Leaderboard from "./Leaderboard";

// Importing new things
import Layout from "./Layout";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <CheckBoxPage/>
      <Leaderboard/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
