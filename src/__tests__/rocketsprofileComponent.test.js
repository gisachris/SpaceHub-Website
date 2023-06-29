import { render } from '@testing-library/react';
import ProfileView from '../mocks/rocketProfile.mock';

describe('making tests for rocket components in profile view', () => {
  test('checking snapshot for rockets View in profile', () => {
    const rocketsData = [
      {
        id: 1, name: 'rocket 1', image: 'image1', description: 'description of rocket1', reserved: false,
      },
      {
        id: 2, name: 'rocket 2', image: 'image2', description: 'description of rocket2', reserved: false,
      },
      {
        id: 3, name: 'rocket 3', image: 'image3', description: 'description of rocket3', reserved: true,
      },
      {
        id: 4, name: 'rocket 4', image: 'image4', description: 'description of rocket4', reserved: true,
      },
    ];

    const reservedData = rocketsData.filter((obj) => obj.reserved === true);

    const { container } = render(<ProfileView reservedData={reservedData} />);
    expect(container).toMatchSnapshot();
  });
});
