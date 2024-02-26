import React from "react";
import {intro1, intro2} from "../constants/data";

const Intro = () => {
	return (
		/*** 인트로 ***/
		<section className="intro" id="intro">
			<div className="img-wrap">
				<div><img src={intro1} alt="welcome"/></div>
			</div>
			<div className="img-wrap">
				<div><img src={intro2} alt="mypage"/></div>
			</div>
		</section>
	)
}

export default Intro;