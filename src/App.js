/*eslint-disable*/
import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from './redux/features/missionsSlice';
import { fetchData } from './redux/features/rocketsSlice';
import Navigation from './components/navigation';
import NotFound from './components/notFound';
import Profile from './components/Profile';
import Missions from './components/Missions';
import './styles/general.css';
import './styles/profile.css';
import RocketsDisplay from './components/rocketsDisplay';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchMissions());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<RocketsDisplay />} />
        <Route path='/rockets' element={<RocketsDisplay />} />
        <Route path='/missions' element={<Missions />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
