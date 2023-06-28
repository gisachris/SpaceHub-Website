import React from 'react';
import { useSelector } from 'react-redux';
import MissionList from './MissionList';

function DisplayMissions() {
  const missions = useSelector((store) => store.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);
  console.log(joinedMissions);
  return (
    <div className="missions">
      <h2>Missions</h2>
      {!joinedMissions ? (
        <p>No missions have been added yet!</p>
      ) : (
        joinedMissions.map((mission) => (
          <MissionList
            key={mission.mission_id}
            id={mission.mission_id}
            missionName={mission.mission_name}
          />
        ))
      )}
    </div>
  );
}

export default DisplayMissions;
