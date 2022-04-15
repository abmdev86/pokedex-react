import { Link } from "react-router-dom";

/**
 * Returns a nav element with a nested Link <a href="https://reactrouter.com/docs/en/v6/getting-started/installation">react-router-dom</a> element.
 *
 * @param  {any} props
 * @param {string} props.className - CSS Class name
 * @param {object} props.style - Object representing a CSS Inline property class
 * @param {string} props.route -  '/route-name' to provide Link.to attribute
 * @param {string} props.linkName - name of the link ex. Home.
 */
export default function NavLink(props) {
  return (
    <nav style={props.style} className={props.className}>
      <Link to={props.route}>{props.linkName}</Link>
    </nav>
  );
}
