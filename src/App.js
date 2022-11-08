import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNoFound from "./Components/PageNoFound";
import Costhook from "./Components/Customhook";
import Reeducer from "./Components/Reeducer";
import MyNav from "./Components/MyNav";
import "./styles.css";
import CheckBoundary from "./Components/CheckBoundary";
import Homepage from "./Components/Home";

function App({ currentUser, checkUserSession }) {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/customhook" element={<Costhook />} />
        <Route path="/reeducer" element={<Reeducer />} />
        <Route path="/checkboundary" element={<CheckBoundary />} />
        <Route path="*" element={<PageNoFound />} />
      </Routes>
    </Router>
  );
}

export default App;
