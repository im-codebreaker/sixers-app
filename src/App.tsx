import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main className='App-main'>
        <h1>Philadephia 76ers</h1>
      </main>
      <Footer />
    </div>
  );
}
