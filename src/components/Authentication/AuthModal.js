// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import { AppBar } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   paper: {
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     color: "white",
//     borderRadius: 10
//   }
// }));

// export default function AuthModal() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   console.log(value);

//   return (
//     <div>
//       <Button
//         variant="contained"
//         style={{
//           width: 85,
//           height: 40,
//           backgroundColor: "#EEBC1D"
//         }}
//         onClick={handleOpen}
//       >
//         Login
//       </Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//             <AppBar>
//               position="static" style=
//               {{
//                 backgroundColor: "transparent",
//                 color: "white"
//               }}
//               >
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 variant="fullWidth"
//                 style={{ borderRadius: 10 }}
//               >
//                 <Tab label="Login" />
//                 <Tab label="Sign Up" />
//               </Tabs>
//             </AppBar>
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }

// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";

// var firebaseConfig = {
//   apiKey: "AIzaSyBAHvLHqbEWcDo3_zEwfl6S3r4XKwaMw2s",
//   authDomain: "restaurant-management-sy-104f6.firebaseapp.com",
//   projectId: "restaurant-management-sy-104f6",
//   storageBucket: "restaurant-management-sy-104f6.appspot.com",
//   messagingSenderId: "991697081255",
//   appId: "1:991697081255:web:1e7aa00461c7a874c8dc82",
//   measurementId: "G-0QL037M30B"

// export const auth = getAuth(),
// export const db = getDatabase(app);
// const app = initializeApp(firebaseConfig);
// export default app;

import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    // console.log(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
