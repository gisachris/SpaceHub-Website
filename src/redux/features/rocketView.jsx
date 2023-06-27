import { useEffect } from 'react';
import '../../styles/rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './rocketsSlice';

const RocketsView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line
  }, []);

  const rocketstate = useSelector((state) => state.rockets);
  const rocketsData = rocketstate.Data;

  return (
    rocketsData.map((obj) => (
      <div key={obj.id} className="rocketInfo">
        <img src={obj.image} alt={`rocket ${obj.id}s display`} className="rocketImage" />
        <section className="rocketSecInfo">
          {obj.booked === true ? (
            <div className="bookedMark">Reserved</div>
          ) : null }
          <span className="rocketTitle">{obj.name}</span>
          <p className="rocketParagraph">{obj.description}</p>
          {obj.booked === false ? (
            <button type="submit" className="bookRocket">Reserve Rocket</button>
          ) : null }
        </section>
      </div>
    ))
  );
};

export default RocketsView;
