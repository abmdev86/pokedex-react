


/**
 * Returns a nav HTML Element with a nested \<a\> element.
 * @param  {any} props
 * @param {string} props.className - CSS classname
 * @param {object} props.style - Object representing inline-CSS class properties to provide \<nav\> tag.
 * @param {string} props.route - href route for \<a\> tag
 * @param {string} props.linkName - name of the link. ex. Home
 */
export default function Nav(props) {
  return (
    <nav style={props.style} className={props.className} >
     <a href={props.route}>{props.linkName}</a>
    </nav>
  );
}
