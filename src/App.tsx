import './App.scss';
import Header from './components/Header';
import Home from './routes/Home';
import Footer from './components/Footer';
import History from './routes/History';
import Roster from './routes/Roster';
import Schedule from './routes/Schedule';
import Stats from './routes/Stats';
import HallOfFame from './routes/HallOfFame';
import Error404 from './routes/Error404';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/roster' element={<Roster />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/hall-of-fame' element={<HallOfFame />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}
