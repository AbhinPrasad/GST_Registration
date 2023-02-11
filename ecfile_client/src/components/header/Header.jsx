import React from "react";
import "./header.css";

const Header = () => {
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

	return (
		<>
			<div className="main__div">
				<div className="left__section">LOGO</div>
				<div className="right__section">
					<ul>
						{listItems.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<li className="list__item">{item}</li>
								</React.Fragment>
							);
						})}
					</ul>
				</div>
			</div>
			<hr />
		</>
	);
};

export default Header;
