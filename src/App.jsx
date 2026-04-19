import Header from './components/01_Header/Header.jsx';
import Intro from './components/02_Intro/Intro.jsx';
import ICan from './components/03_ICan/ICan.jsx';
import Portfolio from './components/04_Portfolio/Portfolio.jsx';
import AboutMe from './components/05_AboutMe/AboutMe.jsx';
import Footer from './components/06_Footer/Footer.jsx';

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
