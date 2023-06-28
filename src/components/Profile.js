/*eslint-disable*/
import DisplayMissions from './DisplayMissions';
function Profile() {
  return (
    <div className='profile'>
      <DisplayMissions />
      <div className='rockets'>
        <h2>Rockets</h2>
        <p>No rockets have been reserved yet!</p>
      </div>
    </div>
  );
}

export default Profile;
