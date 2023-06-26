import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import NotFound from './components/notFound';
import './styles/general.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/rockets" />
        <Route path="/missions" />
        <Route path="/profile" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
