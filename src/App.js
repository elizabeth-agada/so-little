import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import SinglePostPage from './pages/SinglePostPage';
import CascadePage from './pages/CascadePage';
import GettingStartedInTech from './pages/GettingStartedInTech';
import BeginnerWebsiteDevelopment from './pages/BeginnerWebsiteDevelopment';
import ResponsiveDesignsPage from './pages/ResponsiveDesignsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/post/:id" element={<SinglePostPage />} />
            <Route path="/category/css" element={<CascadePage />} />
            <Route path="/post/1" element={<GettingStartedInTech />} />
            <Route path="/post/2" element={<BeginnerWebsiteDevelopment />} />
            <Route path="/post/3" element={<ResponsiveDesignsPage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
