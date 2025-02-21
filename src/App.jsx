import AboutUs from './sections/AboutUs/AboutUs';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Numbers from './sections/Numbers/Numbers';
import PastTransactions from './sections/PastTransactions/PastTransactions';
// import Tariffs from './sections/Tariffs/Tariffs';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Numbers />
      <PastTransactions />
      <AboutUs />
      {/* <Tariffs /> */}
      <Footer />
    </>
  );
}

export default App;
