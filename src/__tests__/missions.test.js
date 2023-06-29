/*eslint-disable*/
import {render} from '@testing-library/react';
import Mission from '../mocks/Mission.mock';

describe('making tests for rocket components in profile view', () => {
  test('checking snapshot for rockets View in profile', () => {
    const missionData = [
      {
        id: 1,
        name: 'rocket 1',
        image: 'image1',
        description: 'description of rocket1',
        join: false,
      },
      {
        id: 2,
        name: 'rocket 2',
        image: 'image2',
        description: 'description of rocket2',
        join: false,
      },
      {
        id: 3,
        name: 'rocket 3',
        image: 'image3',
        description: 'description of rocket3',
        join: true,
      },
      {
        id: 4,
        name: 'rocket 4',
        image: 'image4',
        description: 'description of rocket4',
        join: true,
      },
    ];

    const joinData = missionData.filter(obj => obj.join === true);

    const {container} = render(<Mission joinData={joinData} />);
    expect(container).toMatchSnapshot();
  });
});
