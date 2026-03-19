import { useState, useEffect } from 'react';
import './index.css';

// Components
import Hero from './components/Hero';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';
import Glossary from './components/Glossary';
import PcmSection from './components/PcmSection';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'glossary', 'pcm', 'step1', 'step2', 'step3', 'step4'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar activeSection={activeSection} />
        <main className="content">
          <div id="intro"><Hero /></div>
          <div id="glossary"><Glossary /></div>
          <div id="pcm"><PcmSection /></div>
          <div id="step1"><Chapter1 /></div>
          <div id="step2"><Chapter2 /></div>
          <div id="step3"><Chapter3 /></div>
          <div id="step4"><Chapter4 /></div>
        </main>
      </div>
    </div>
  );
}

export default App;
