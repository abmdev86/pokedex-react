import React from "react";
import Button from "@mui/material/Button";
const CommonButton = ({ children, color, disable, variant, sx }) => {
  return (
    <Button color={color} disabled={disable} variant={variant} sx={sx}>
      {children}
    </Button>
  );
};

export default CommonButton;
