/*eslint-disable*/
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation';
import NotFound from './components/notFound';
import Profile from './components/Profile';
import './styles/general.css';
import './styles/profile.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/rockets' />
        <Route path='/missions' />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
