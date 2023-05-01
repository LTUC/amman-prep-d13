import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      {/* <a href="/">Home</a> */}
      {/* <a href="/about">About</a> */}
    </header>
  )
}