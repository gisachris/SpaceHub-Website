import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import './missions.css';

function Missions() {
  const { missions } = useSelector((store) => store.missions);
  // missions.forEach(misson => console.log(misson.mission_id));

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="name">Mission</th>
            <th className="desc">Descrption</th>
            <th className="status">Status</th>
            <th> </th>
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
