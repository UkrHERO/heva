import HeaderAccord from "./components/HeaderAccord/HeaderAccord";
import HeaderContacts from "./sections/HeaderContacts/HeaderContacts";
import Header from "./sections/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./sections/Footer/Footer";
import Copyright from "./sections/Copyright/Copyright";
import MainBanner from "./sections/MainBanner/MainBanner";
import Services from "./sections/Services/Services";
import AboutUs from "./sections/AboutUs/AboutUs";
import Benefits from "./sections/Benefits/Benefits";
import Price from "./sections/Price/Price";
import Contacts from "./sections/Contacts/Contacts";
import ToTop from "./components/ToTop/ToTop";
import LocalizationContext from "./context/localization";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <LocalizationContext>
      {/* <HeaderAccord /> */}
      {/* <HeaderContacts /> */}
      {/* <Container> */}
      <Header />
      {/* </Container> */}
      <MainBanner />
      <Benefits />
      {/* <Services /> */}
      <Price />
      <AboutUs />
      <Contacts />
      {/* <Footer /> */}
      <Copyright />
      <ToTop />
    </LocalizationContext>
  );
}

export default App;
