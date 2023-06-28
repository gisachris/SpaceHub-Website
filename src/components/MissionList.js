import React from 'react';
import PropTypes from 'prop-types';
import '../styles/profile.css';

function MissionList(props) {
  const { missionName } = props;
  return (
    <table>
      <tbody>
        <tr className="joined-mission">
          <td className="Missionsdata">{missionName}</td>
        </tr>
      </tbody>
    </table>
  );
}

MissionList.propTypes = {
  missionName: PropTypes.string.isRequired,
};
export default MissionList;
