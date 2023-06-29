import { render } from '@testing-library/react';
import RocketView from '../mocks/rocket.mock';

describe('making tests for rocket components', () => {
  test('checking snapshot for rockets View', () => {
    const rocketsData = [
      {
        id: 1, name: 'rocket 1', image: 'image1', description: 'description of rocket1', reserved: false,
      },
      {
        id: 2, name: 'rocket 2', image: 'image2', description: 'description of rocket2', reserved: false,
      },
    ];
    const handleReservations = jest.fn();
    const handlecancelation = jest.fn();

    const tree = render(<RocketView
      rocketsData={rocketsData}
      handleReservations={handleReservations}
      handlecancelation={handlecancelation}
    />);
    expect(tree).toMatchSnapshot();
  });
});
