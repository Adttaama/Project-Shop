import { Routes, Route } from "react-router-dom";

import NavCom from "./component/NavCom";
import FooterComponent from "./component/footerComponent";

import homepage from "./pages/homepage";
import kelaspage from "./pages/kelaspage";
import faqpage from "./pages/faqpage";
import syaratpage from "./pages/syaratpage";
import testipage from "./pages/testipage";

function App() {
  return (
    <div>
      <NavCom />

      <Routes>
        <Route path="/" Component={homepage}></Route>
        <Route path="/kelas" Component={kelaspage}></Route>
        <Route path="/faq" Component={faqpage}></Route>
        <Route path="/syarat" Component={syaratpage}></Route>
        <Route path="/testi" Component={testipage}></Route>
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
