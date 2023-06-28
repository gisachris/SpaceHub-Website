import { useEffect } from 'react';
import '../../styles/rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, reserve, cancel } from './rocketsSlice';

const RocketsView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line
  }, []);

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
      <div key={obj.id} className="rocketInfo">
        <img src={obj.image} alt={`rocket ${obj.id}s display`} className="rocketImage" />
        <section className="rocketSecInfo">
          <span className="rocketTitle">{obj.name}</span>
          {obj.reserved && (
          <>
            <div className="bookMarked">Reserved</div>
            <p className="rocketParagraphbooked">{obj.description}</p>
          </>
          )}
          {!obj.reserved && (
          <p className="rocketParagraph">{obj.description}</p>
          )}

          {!obj.reserved && (
          <button type="submit" className="bookRocket" onClick={() => handleReservations(obj.id)}>
            Reserve Rocket
          </button>
          )}

          {obj.reserved && (
          <button type="submit" className="cancelRocket" onClick={() => handlecancelation(obj.id)}>
            Cancel Reservation
          </button>
          )}

        </section>
      </div>
    ))
  );
};

export default RocketsView;
