import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import TC from "./Pages/TC";
import ContactUs from "./Pages/ContactUs";
import Earn from "./Pages/Earn";
import CustomerJourney from "./Pages/CustomerJourney";
import PaypennyUK from "./Pages/PaypennyUK";
import PaypennyEU from "./Pages/PaypennyEU";
import NavBar from "./Components/NavBar/NavBar";
import SubFooter from "./Components/SubFooter/SubFooter";
import Qr from "./Components/Qr/Qr";
import Blogs from "./Pages/Blog/Blogs";
import Blog2 from "./Pages/Blog2/Blog2";
import MoneySubFooter from "./Components/MoneySubFooter/MoneySubFooter";
import ContactUsUk from "./Pages/ContactUsUk";

function App() {
  console.log(window.location.href);
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/contactusUk" element={<ContactUsUk />} />
          <Route path="/earns" element={<Earn />} />
          <Route path="/processflow" element={<CustomerJourney />} />
          <Route path="/uk" element={<PaypennyUK />} />
          <Route path="/eu" element={<PaypennyEU />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
        {/* <Qr />
        <div className="divider container"></div>
        {window.location.href === "https://paypenny.io/uk" ? (
          <MoneySubFooter />
        ) : (
          <SubFooter />
        )}

        <div className="divider container"></div>
        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
