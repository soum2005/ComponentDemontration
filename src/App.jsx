import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import FloatingSwitcher from './components/common/FloatingSwitcher';

function App() {
  const [activePage, setActivePage] = useState('home');
  // 'all' shows all sections stacked like index.html; 'single' shows page-by-page like about.html, menu.html, etc.
  const [viewMode, setViewMode] = useState('all');

  const handleNavClick = (pageId, e) => {
    setActivePage(pageId);

    if (viewMode === 'all') {
      const targetElement = document.getElementById(pageId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (e) e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (viewMode !== 'all') return;

    const sections = ['home', 'about', 'menu', 'products', 'review', 'contact', 'blog'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActivePage(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  return (
    <div className="app">
      <FloatingSwitcher
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
      />

      <Header activeSection={activePage} onNavClick={handleNavClick} />

      {viewMode === 'all' ? (
        <main>
          <Home />
          <About />
          <Menu />
          <Products />
          <Review />
          <Contact />
          <Blog />
        </main>
      ) : (
        <main style={{ minHeight: '80vh' }}>
          {activePage === 'home' && (
            <>
              <Home />
              <Menu />
              <Products />
            </>
          )}
          {activePage === 'about' && <About />}
          {activePage === 'menu' && <Menu />}
          {activePage === 'products' && <Products />}
          {activePage === 'review' && <Review />}
          {activePage === 'contact' && <Contact />}
          {activePage === 'blog' && <Blog />}
        </main>
      )}

      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;
