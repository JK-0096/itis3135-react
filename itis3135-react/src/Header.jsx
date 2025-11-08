import { NavLink } from "react-router-dom";
export default function Header() {
    return (
       <header>
            <h1>John Kim | ITIS3135</h1>
            <nav>
                <NavLink to="/" end className="nav-link">Home </NavLink>
                <NavLink to="/Introduction" end className="nav-link">Introduction </NavLink>
                <NavLink to="/Contract" end className="nav-link">Contract</NavLink>
            </nav>
            <nav>
            <a href="ITIS3135/stuff/ROCK&YOU.htm">Crappy Webpage Assignment</a>
            <a href="ITIS3135/hobby/index.html">Hobby Webpage Assignment</a>
            <a href="ITIS3135/intro_form.html">Intro Form</a>
            <a href="ITIS3135/fccfsjs_outline.html">FCC Full Stack JS Outline</a>
            <a href="ITIS3135/project/index.html">JavaScript Learning Site Project</a>
            </nav>
        </header>
    );
}