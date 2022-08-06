import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar_Sidebar from "./components/Navbar_Sidebar";
import Admin from "./pages/Admin";
import Career from "./pages/Career";
import Team from "./pages/Team";
import Product from "./pages/Product";
import Subscription from "./pages/Subscription";
import Enquiry from "./pages/Enqueries";
import Testimonal from "./pages/testimonal";
import Blog from "./pages/Blog";
import Account from "./pages/account";

function App() {
  return (
    <Router>
      <Navbar_Sidebar />
      <Routes>
        <Route path="/adminlist" element={<Admin />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/subscription" element={<Subscription />}></Route>
        <Route path="/enquiry" element={<Enquiry />}></Route>
        <Route path="/testimonal" element={<Testimonal />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
