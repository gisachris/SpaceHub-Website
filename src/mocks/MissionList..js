/*eslint-disable*/
import PropTypes from 'prop-types';

function MissionList({missionName}) {
  return (
    <table>
      <tbody>
        <tr className='joined-mission'>
          <td className='Missionsdata'>{missionName}</td>
        </tr>
      </tbody>
    </table>
  );
}

MissionList.propTypes = {
  missionName: PropTypes.string.isRequired,
};
export default MissionList;
