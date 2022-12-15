// import { Helmet } from "react-helmet";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>OmarBassatni</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
