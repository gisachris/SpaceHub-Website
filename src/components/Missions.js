import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';

import { fetchMissions } from '../redux/features/missionsSlice';
import './missions.css';

function Missions() {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="name">Mission</th>
            <th className="desc">Descrption</th>
            <th className="status">Status</th>
            <th className="empty"> </th>
          </tr>
        </thead>

        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            id={mission.mission_id}
            missionName={mission.mission_name}
            missionDesc={mission.description}
          />
        ))}
      </table>
    </div>
  );
}

export default Missions;
