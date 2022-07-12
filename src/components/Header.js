import { Nav } from "./NavigationComponents/Nav";

export default function Header(props) {
  <header className={props.className}>
    <h1 className="App-title">{props.pageTitle}</h1>
    <Nav />
  </header>;
}
