import { Alert } from "@mui/material";
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert
          severity="error"
          onClose={() => {
            this.setState({ hasError: false, message: "" });
          }}
        >
          An Error has occured! {this.state.message}
        </Alert>
      );
    }

    return this.props.children;
  }
}
