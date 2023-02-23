import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

const listItems = [
	"HOME",
	"ABOUT",
	"SERVICES",
	"PORTFOLIO",
	"PRICING",
	"GST REGISTRATION",
	"CONTACT",
	"WHATSAPP US"
];

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<nav className="navbar">
					<div className="navbar-container container">
						<Link
							to="/"
							className="navbar-logo"
							onClick={closeMobileMenu}>
							GST
						</Link>
						<div className="menu-icon" onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							{listItems.map((item) => {
								return (
									<li className="nav-item" key={item}>
										<NavLink
											to="/"
											className={({ isActive }) =>
												"nav-links" + (isActive ? " activated" : "")
											}
											onClick={closeMobileMenu}>
											{item}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
