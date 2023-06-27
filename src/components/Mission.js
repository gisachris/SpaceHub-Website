/*eslint-disable*/
import React from 'react';

function Mission(props) {
  const {id, missionName, missionDesc} = props;
  return (
    <tbody>
      <tr>
        <td className='name'>{missionName}</td>
        <td>{missionDesc}</td>
        <td className='member'>
          <span>Not a member</span>
        </td>
        <td>
          <button className='minors'>Join mission</button>
        </td>
      </tr>
    </tbody>
  );
}

export default Mission;
