import React, { useState } from 'react';
import axios from 'axios';

import { axiosWithAuthFood } from '../utils/axiosWithAuth';

// Post a new food item to be donated
// POST to https://bw-replate.herokuapp.com/api/food

// Takes a JWT and an object including:

// {
// 	name: "New Food Item",
// 	time: "113033",
// 	description: "Wow look at this food to be donated",
// 	is_claimed: "0", //0 if false, 1 if true
// 	pickup_date: “01/01/2019“
// }




const DonationForm = (props) => {
    //set state
    const [donation, setDonation] = useState({
        name: "",
        time: "",
        description: "",
        is_claimed: "",
        pickup_date: ""
    })

    const foodToken = localStorage.getItem("token");
       //set donation
    const DonationSubmit = e => {
            console.log("Click Worked")
            e.preventDefault();
            axiosWithAuthFood
                .put(donation)
                .then(res => {
                    console.log(res.data);
                            })
                .catch(err => console.log(err))
  }

     //change handler
  const handleChange = e => {
    setDonation({
      ...donation,
      [e.target.name]: e.target.value
    })
  }

    return(
        <div>
            <form onSubmit={DonationSubmit}>
            <input
                component="input"
                type="text"
                name="name"
                placeholder="Enter food name"
                onChange={handleChange}
            />
            <input
                component="input"
                type="text"
                name="time"
                placeholder="Enter time entered"
                onChange={handleChange}
            />
            <input
                component="input"
                type="text"
                name="description"
                placeholder="Enter food description"
                onChange={handleChange}
            />
            <input
                component="input"
                type="text"
                name="is_claimed"
                placeholder="Enter 0 if false, 1 if true"
                onChange={handleChange}
            />
            <input
                component="input"
                type="text"
                name="date"
                placeholder="01/01/2000"
                onChange={handleChange}
            />
            <button>Submit Food</button>
            </form>
        </div>
    )
}

export default DonationForm;