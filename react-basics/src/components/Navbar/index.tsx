import './style.scss'
const Navbar = (props: {
  companyName: string,
  h: string,
  a: string,
  s: string,
  g: string,
  login: boolean,
  setLogin: () => void
}) => {

  return (
    <>
      <nav>
        <a href="#" className="logo">
          {props.companyName}
        </a>
        <ul>
          <li><a href="/">{props.h}</a></li>
          <li><a href="/">{props.a}</a></li>
          <li><a href="/">{props.s}</a></li>
          <li><a href="/">{props.g}</a></li>
          <li><button onClick={() => props.setLogin()}>{props.login ? "Logout" : "Login"}</button></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar