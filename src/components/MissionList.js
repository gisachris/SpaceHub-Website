/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';

function MissionList(props) {
  const {missionName} = props;
  console.log(missionName);
  return (
    <table className='mision-table'>
      <tbody>
        <tr className='joined-mission'>
          <td>{missionName}</td>
        </tr>
      </tbody>
    </table>
  );
}

MissionList.propTypes = {
  missionName: PropTypes.string.isRequired,
};
export default MissionList;
