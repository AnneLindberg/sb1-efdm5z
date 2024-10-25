import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Questions from './components/Questions';

function App() {
  return (
    <div className="min-h-[100dvh]">
      <div className="container mx-auto max-w-4xl min-h-[100dvh] px-4 py-6 md:py-8">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/questions/:category" element={<Questions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;