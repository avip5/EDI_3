import Hero from './components/Hero';
import AISummary from './components/AISummary';
import RankingSection from './components/RankingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <AISummary />
      <RankingSection />
      <Footer />
    </div>
  );
}

export default App;
