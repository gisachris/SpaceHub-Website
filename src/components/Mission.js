/*eslint-disable*/
import React from 'react';

function Mission(props) {
  const {id, missionName, missionDesc} = props;
  return (
    <tbody>
      <tr>
        <td className='name'>{missionName}</td>
        <td>{missionDesc}</td>
        <td className='minors'>Not started</td>
        <td>
          <button className='minors'>Join</button>
        </td>
      </tr>
    </tbody>
  );
}

export default Mission;
