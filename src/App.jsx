import React, { useState} from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Program from "./components/Program/Program";
import Speakers from "./components/Speakers/Speakers";
import PaymentForm from "./components/Payment/Payment";




function App() {

const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <>
      <Header  onBuyTicketClick={() => setIsPaymentModalOpen(true)} />
      <Hero onBuyTicketClick={() => setIsPaymentModalOpen(true)} />
      <About />
      <Program />
      <Speakers />
      <Details />
      <Footer />

      {/* 4. Отображай форму, только если isPaymentModalOpen === true */}
      {/* И передай функцию закрытия внутрь PaymentForm */}
      {isPaymentModalOpen && (
        <PaymentForm onClose={() => setIsPaymentModalOpen(false)} />
      )}
    </>
  );
}

export default App;
