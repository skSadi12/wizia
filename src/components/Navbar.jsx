import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
export default function Navbar() {
  return (
    <nav className="p-4 bg-primary text-black flex justify-between">
      <h1 className="text-xl font-bold">Logo</h1>
      <div className="hidden md:flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <HamburgerMenu />
    </nav>
  );
}