// import {
//     axiosWithAuthBusiness,
//     axiosWithAuthFood
//   } from "../utils/axiosWithAuth.js";
//----get the user token========
// let credentials = {
//   // username: "aasDora2",
//   // password: "pass"
// };

// const [tokenNum, setToken] = useState("");
// const [businessUser, setBusinessUser] = useState({});
// // let response = {};
// useEffect(() => {
//   axiosWithAuthBusiness()
//     .post("/login", credentials)
//     .then(data => {
//       setToken(data.data.token);
//       console.log(data.data.token);
//       // setBusinessUser(data.data.user);
//       // console.log(businessUser, data.data.user);
//     })
//     .catch(err => console.log(err));
//   // }
// }, []);

// const [filteredDonations, setFilteredDons] = useState([]);
// setFilteredDons();
// useEffect(() => {
//     if (donations == 0) {
//       setFilteredDons(dummyData);
//       console.log("filtered", filteredDonations);
//     }
//   });

// let tokenNum = localStorage.getItem("token");
// useEffect(() => {
//       axios
//         .get("https://bw-replate.herokuapp.com/api/food", {
//           headers: { Authorization: `${tokenNum}` }
//         })
//       .then(res => {
//         console.log("Get response:", res.data);
//         setFoodItems(res.data);
//       })
//       .catch(e => console.log(e));
//   }, []);
