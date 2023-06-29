import '../styles/rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { reserve, cancel } from '../redux/features/rocketsSlice';
import Rocket from './rocket';

const RocketsView = () => {
  const dispatch = useDispatch();

  const rocketstate = useSelector((state) => state.rockets);
  const rocketsData = rocketstate.Data;

  const handleReservations = (id) => {
    dispatch(reserve(id));
  };

  const handlecancelation = (id) => {
    dispatch(cancel(id));
  };

  return (
    rocketsData.map((obj) => (
      <Rocket
        data={obj}
        handleReservations={handleReservations}
        handlecancelation={handlecancelation}
        key={obj.id}
      />
    ))
  );
};

export default RocketsView;
