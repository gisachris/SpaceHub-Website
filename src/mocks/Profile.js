/*eslint-disable*/

function Profile({missionData, rocketData}) {
  return (
    <div className='profile'>
      <div className='missions'>
        {missionData.map(data => (
          <ul key={data.id}>
            <li>{data.name}</li>
            <li>{data.desc}</li>
            <li>{data.join ? 'Joined' : 'Join'}</li>
          </ul>
        ))}
      </div>
      <div className='rockets'>
        {rocketData.map(data => (
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

const missionData = [
  {
    id: 1,
    name: 'name 1',
    desc: 'desc 1',
    join: false,
  },
];
const rocketData = [
  {
    id: 1,
    name: 'name 1',
    desc: 'desc 1',
    false: false,
  },
];
