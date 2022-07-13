import React from "react";
import Button from "@mui/material/Button";
const CommonButton = ({ children, color, disable, variant, sx, onClick }) => {
  return (
    <Button
      color={color}
      disabled={disable}
      variant={variant}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
