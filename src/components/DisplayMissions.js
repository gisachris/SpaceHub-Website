import React from 'react';
import { useSelector } from 'react-redux';
import MissionList from './MissionList';
import '../styles/profile.css';

function DisplayMissions() {
  const missions = useSelector((store) => store.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);
  return (
    <div className="missions">
      <h2>Missions</h2>
      {joinedMissions.length === 0 ? (
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
