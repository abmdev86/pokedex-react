import Grid from "@mui/material/Grid";
import CommonButton from "components/CommonComponents/CommonButton";

import React from "react";
const buttonStyles = {
  fontSize: 20,
  fontWeight: 700,
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "yellow",
  },
};
const Auth = () => {
  const login = () => {
    console.log("Logging in");
  };
  return (
    <Grid item xs={8}>
      This is the Auth page
      <CommonButton
        sx={buttonStyles}
        size="large"
        variant="contained"
        onClick={() => login()}
      >
        Login
      </CommonButton>
      <CommonButton
        disable={true}
        sx={buttonStyles}
        size="large"
        variant="contained"
      >
        Logout
      </CommonButton>
    </Grid>
  );
};

export default Auth;
