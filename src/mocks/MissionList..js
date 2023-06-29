import PropTypes from 'prop-types';

function MissionList({ missionData }) {
  return (
    <table>
      <tbody>
        <tr className="joined-mission">
          <td className="Missionsdata">{missionData.name}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MissionList;

MissionList.propTypes = {
  missionData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
