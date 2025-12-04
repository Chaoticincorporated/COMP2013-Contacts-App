import "./App.css";
import ContactsPage from "./Components/ContactsPage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import PageNotFound from "./Components/PageNotFound";
import UnauthorizedPage from "./Components/UnauthorizedPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/contacts" element={<ContactsPage/>}/>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/unauthorized" element={<UnauthorizedPage/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
