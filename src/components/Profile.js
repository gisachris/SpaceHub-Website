import { useSelector } from 'react-redux';
import DisplayMissions from './DisplayMissions';
import ProfileRocketView from './rocketProfileView';

function Profile() {
  const rocketData = useSelector((state) => state.rockets.Data);
  const bookedRockets = rocketData.filter((rockets) => rockets.reserved === true);
  return (
    <div className="profile">
      <div className="missions">
        <DisplayMissions />
      </div>
      <div className="rockets">
        <ProfileRocketView reservedData={bookedRockets} />
      </div>
    </div>
  );
}
export default Profile;
