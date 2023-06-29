/*eslint-disable*/
import PropTypes from 'prop-types';

function MissionList({missionData}) {
  return (
    <table>
      <tbody>
        <tr className='joined-mission'>
          <td className='Missionsdata'>{missionData.name}</td>
        </tr>
      </tbody>
    </table>
  );
}

MissionList.propTypes = {
  missionData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MissionList;
