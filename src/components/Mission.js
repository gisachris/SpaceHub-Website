import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/features/missionsSlice';

function Mission(props) {
  const dispatch = useDispatch();
  const { id, missionName, missionDesc } = props;
  const missions = useSelector((state) => state.missions.missions);
  const mission = missions.find((mission) => mission.mission_id === id);
  const joinClass = mission?.joined ? 'join-btn joined' : 'join-btn';
  const activateMember = mission.joined ? 'active-mission' : 'member';

  return (
    <tbody>
      <tr>
        <td className="name">{missionName}</td>
        <td>{missionDesc}</td>
        <td className="members">
          <span className={activateMember}>
            {mission.joined ? 'Active member' : 'Not a member'}
          </span>
        </td>
        <td>
          <button
            className={joinClass}
            onClick={() => (mission.joined
              ? dispatch(leaveMission(id))
              : dispatch(joinMission(id)))}
            type="submit"
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
