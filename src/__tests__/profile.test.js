/*eslint-disable*/
import {render} from '@testing-library/react';
import Profile from '../mocks/Profile';

describe('tests for Profile component', () => {
  test('renders correctly', () => {
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

    const {container} = render(
      <Profile rocketData={rocketData} missionData={missionData} />
    );
    expect(container).toMatchSnapshot();
  });
});
