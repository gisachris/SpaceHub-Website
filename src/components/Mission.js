/*eslint-disable*/
import React, {useEffect} from 'react';
import {joinMission} from '../redux/features/missionsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMissions} from '../redux/features/missionsSlice';

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
          >
            Join mission
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Mission;
