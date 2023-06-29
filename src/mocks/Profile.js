import PropTypes from 'prop-types';

function Profile({ missionData, rocketData }) {
  return (
    <div className="profile">
      <div className="missions">
        {missionData.map((data) => (
          <ul key={data.id}>
            <li>{data.name}</li>
            <li>{data.desc}</li>
            <li>{data.join ? 'Joined' : 'Join'}</li>
          </ul>
        ))}
      </div>
      <div className="rockets">
        {rocketData.map((data) => (
          <ul key={data.id}>
            <li>{data.name}</li>
            <li>{data.desc}</li>
            <li>{data.reserved ? 'reserved' : 'Reserve'}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  missionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      join: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  rocketData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
