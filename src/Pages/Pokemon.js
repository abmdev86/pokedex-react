import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const { name } = useParams();

  return <Container maxWidth="sm">{name}</Container>;
}
