import Banner from "./components/banner/Banner";
import Aboutme from "./components/about/Aboutme";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Details from "./components/details/Details";
import Testimonial from "./components/testimonial/Testimonial";
function App() {
  return (
    <div className="w-full">    
    <Header />
    <body>
      <main>
        <Banner />
        <Aboutme />
        <Service />
        <Portfolio />
        <Details />
        <Testimonial />
        <Contact />        
      </main>
    </body>
    </div>
  );
}

export default App;
