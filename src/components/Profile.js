import { useSelector } from 'react-redux';
import DisplayMissions from './DisplayMissions';

function Profile() {
  const rocketData = useSelector((state) => state.rockets.Data);
  const bookedRockets = rocketData.filter((rockets) => rockets.reserved === true);
  return (
    <div className="profile">
      <div className="missions">
        <DisplayMissions />
      </div>
      <div className="rockets">
        <h2 className="rocketsHeader">Rockets</h2>
        {bookedRockets.length === 0 && (
          <p>No rockets have been reserved yet!</p>
        )}

        {bookedRockets.length > 0 && (
          <table className="holderTable">
            <tbody>
              {bookedRockets.map((rocket) => (
                <tr key={rocket.id} className="rocketrow">
                  <td className="rocketdata">{rocket.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default Profile;
