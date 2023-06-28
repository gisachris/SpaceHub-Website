/*eslint-disable*/
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {joinMission} from '../redux/features/missionsSlice';

function Mission(props) {
  const dispatch = useDispatch();
  const {id, missionName, missionDesc} = props;
  const missions = useSelector(state => state.missions.missions);
  const mission = missions.find(mission => mission.mission_id === id);
  const buttonClass = mission?.joined ? 'btn joined' : 'btn';

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
            {mission?.joined ? 'Leave mission' : 'Join mission'}
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