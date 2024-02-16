import React from "react";
import { Logo } from "../constants/data";

const HeaderNav = [
	{
		text: "소개",
		url: "#about"
	},
	{
		text: "프로젝트",
		url: "#projectintro"
	}
];

const Header = () => {
	return(
		<header id="header">
			<div className="header-con">
				<a href="/" className="logo">
					<img src={Logo}/>
				</a>
				<nav className="navi navi-wide">
					<ul>
						{HeaderNav.map((navi, key) => (
							<li key={key}>
								<a href={navi.url}>
									{navi.text}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;