import React from "react";
import Header from "../component/Header";
import Main from "../component/Main";
import Intro from "../component/Intro";
import About from "../component/About";
import ProjectIntro from "../component/ProjectIntro";
import Project from "../component/Project";
import Footer from "../component/Footer";

const Home = () => {
	return (
		<>
			<Header/>
			<Main>
				<Intro/>
				<About/>
				<ProjectIntro/>
				<Project/>
			</Main>
			<Footer/>
		</>
	)
}

export default Home;