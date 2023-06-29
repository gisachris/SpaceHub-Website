import React from "react";

const ProfileView = ({reservedData}) => {
  return (
    <section>
      <div className="rockets">
        <h2 className="rocketsHeader">Rockets</h2>
        {reservedData.length === 0 && (
          <p>No rockets have been reserved yet!</p>
        )}

        {reservedData.length > 0 && (
          <table className="holderTable">
            <tbody>
              {reservedData.map((rocket) => (
                <tr key={rocket.id} className="rocketrow">
                  <td className="rocketdata">{rocket.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )  

}

export default ProfileView;