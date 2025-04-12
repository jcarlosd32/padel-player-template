import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import PlayerPage from './pages/[slug]';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}