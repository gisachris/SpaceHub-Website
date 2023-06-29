import { render } from '@testing-library/react';
import MissionList from '../mocks/MissionList.';

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

    const { container } = render(<MissionList missionData={missionData} />);
    expect(container).toMatchSnapshot();
  });
});
