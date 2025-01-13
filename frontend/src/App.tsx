import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import RelatedLinks from './components/RelatedLinks';
import Footer from './components/Footer';
import './App.css';

function App(): React.JSX.Element {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Article />
        <RelatedLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;