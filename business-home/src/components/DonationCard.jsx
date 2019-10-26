import React, { useState } from "react";
import "../DonationCard.css";

const DonationCard = props => {
  const [donation, setDonation] = useState(undefined);
  const {
    id,
    name,
    pickup_date,
    time,
    description,
    is_claimed,
    business_id,
    volunteer_id
  } = props.each;
  /*
  const propKeys = Object.keys(props.each);
  console.log(propKeys);
  "id", "name", "pickup_date", "time", "description", "is_claimed", "business_id", "volunteer_id"
  */

  if (props.each !== undefined) {
    // console.log(props.each.name, props.each.url);
  }

  let status = "Ready for Pickup";
  if (is_claimed === 1) {
    status = "Picked Up";
  }

  return props.each ? (
    <section>
      <div className="donationCard">
        <img
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80"
          alt="test"
        ></img>
        <div className="busCard-details">
          <h2>{name}</h2>
          <p>{description}</p>
          <br />
          <div className="bus-bottom-row">
            <p>{pickup_date}</p>
            <p>{status}</p>
          </div>
          <a href="" alt="modify-item">
            Modify
          </a>
          <a href="" alt="delete-item">
            Delete
          </a>
        </div>
      </div>
    </section>
  ) : null;
  //END DONATIONCARD
};

export default DonationCard;
