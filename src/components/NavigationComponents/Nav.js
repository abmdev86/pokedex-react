export default function Nav(props) {
  return (
    <nav style={props.style} className={props.className} href={props.href}>
      {props.link}
    </nav>
  );
}
