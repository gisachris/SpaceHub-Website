/*eslint-disable*/
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {joinMission, fetchMissions} from '../redux/features/missionsSlice';

function Mission(props) {
  const dispatch = useDispatch();
  const {id, missionName, missionDesc} = props;
  const missions = useSelector(state => state.missions.missions);
  const mission = missions.find(mission => mission.mission_id === id);
  const buttonClass = mission?.joined ? 'btn joined' : 'btn';

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <tbody>
      <tr>
        <td className='name'>{missionName}</td>
        <td>{missionDesc}</td>
        <td className='member'>
          <span>Not a member</span>
        </td>
        <td>
          <button
            className={buttonClass}
            onClick={() => dispatch(joinMission(id))}
            type='submit'
          >
            Join mission
          </button>
        </td>
      </tr>
    </tbody>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default Mission;
