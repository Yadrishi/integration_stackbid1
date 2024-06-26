// import React from "react";
// import Axios from "axios";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Switch } from "react-router-dom";

// // import Navbar from "./Components/Navbar/Navbar";
// // import AboutUs from "./Components/AboutUs/AboutUs";
// // import SellerHistory from "./Components/SellerHistory/SellerHistory"; // Import SellerHistory component
// import "./App.css";
// // import UploadItem from "./Components/UploadItem/UploadItem";
// // import Feedback from "./Components/feedback/feedback";
// import SignUp from "./Components/SignUp/SignUp";
// import Login from "./Components/login/login";
// // import History from "./Components/History/history";
// // import Cart from "./Components/Cart/cart";
// // import Profile from "./Components/Profile/profile";
// // import Footer from "./Components/Footer/Footer";

// // const App = () => {
// //   const [data, setdata] = useState("");
// //   const getData = async () => {
// //     try {
// //       const response = await Axios.get("http://localhost:3000/getData");
// //       setData(response.data);
// //     } catch (error) {
// //       console.error("Error fetching data", error);
// //     }
// //   };

// // import History from "./Components/History/history";
// // import Cart from "./Components/Cart/cart";
// // import Profile from "./Components/Profile/profile";
// // import Footer from "./Components/Footer/Footer";

// // function App() {
// //   const [backendData, setBackendData] = useState([{}]);

// //   useEffect(() => {
// //     fetch("/api")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setBackendData(data);
// //       });
// //   }, []);

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         {/* <Route path="/" element={<AboutUs />} /> */}
//         <Route path="/login" element={<Login />} />
//         {/* <Route path="/signUp" element={<SignUp />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/sellerhistory" element={<SellerHistory />} />
//         <Route path="/uploadItem" element={<UploadItem />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/feedback" element={<Feedback />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import SellerHistory from "./Components/SellerHistory/SellerHistory"; // Import SellerHistory component
import "./App.css";
import UploadItem from "./Components/UploadItem/UploadItem";
import Feedback from "./Components/feedback/feedback";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/login/login";
import History from "./Components/History/history";
import Cart from "./Components/Cart/cart";
import Profile from "./Components/Profile/profile";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/history" element={<History />} />
        <Route path="/sellerhistory" element={<SellerHistory />} />
        <Route path="/uploadItem" element={<UploadItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
