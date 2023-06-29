import PropTypes from 'prop-types';

const Mission = ({ joinData }) => (
  <section>
    <div className="mission">
      <h2 className="missionHeader">mission</h2>
      {joinData.length === 0 && <p>No mission have been reserved yet!</p>}

      {joinData.length > 0 && (
        <table className="holderTable">
          <tbody>
            {joinData.map((mission) => (
              <tr key={mission.id} className="missionrow">
                <td className="missionData">{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </section>
);

Mission.propTypes = {
  joinData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      join: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Mission;
