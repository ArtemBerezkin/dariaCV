import Header from './components/Header/Header.jsx';
import Intro from './components/Intro/Intro.jsx';
import ICan from './components/ICan/ICan.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => (
  <>
    <Header />
    <main>
      <Intro />
      <ICan />
      <Portfolio />
      <AboutMe />
    </main>
    <Footer />
  </>
);

export default App;
