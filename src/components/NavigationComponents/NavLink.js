import { Link } from "react-router-dom";

/**
 * @param  {any} props
 */
export default function NavLink(props){
    return (
      <nav style={props.style} className={props.className}>
        <Link to={props.route}/>
      </nav>
    );
}