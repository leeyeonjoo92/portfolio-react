import React from "react";
import { tools, merits } from "../constants/data";

const About = () => {
	return (
		/*** 소개 ***/
		<section className="about" id="about">
			<h1 className="title">About</h1>
			<div className="con-wrap">
				<div className="con">
					<ul className="ment">
						<li>안녕하세요. 다양한 경험에 목마른 1년 8개월차 퍼블리셔 이연주 입니다.</li>
						<li>'두루두루 고와라' 라는 이름의 뜻처럼 다양한 방면에서 실력을 발휘할 수 있는 인재로 성장해 나가겠습니다.</li>
					</ul>
					
					{/*** 경력 ***/}
					<div className="history">
						<h2 className="sub-title">경력</h2>
						<div className="sub-con">
							<div>2021.12 ~ 2023.04 기적기획 퍼블리셔</div>
							<div>2021.05 ~ 2021.09 더조은컴퓨터아트학원 (디지털디자인)웹디자인(웹퍼블리셔) 프론트앤드(스마트혼합) 수료</div>
						</div>
					</div>
				</div>

				<div className="con">
					{/*** 사용툴 ***/}
					<div className="tool">
						<h2 className="sub-title">사용툴</h2>
						<div className="sub-con">
							{tools.map((tool, key) => (
								<div key={key}>
									<div>
										<img src={tool.img} alt={tool.text}/>
									</div>
									<span>{tool.text}</span>
								</div>
							))}
						</div>
					</div>

					{/*** 자격증 ***/}
					<div className="license">
						<h2 className="sub-title">자격증</h2>
						<ul className="sub-con">
							<li>2015.08 (국가공인) GTQ 1급</li>
							<li>2015.04 (국가공인) ITQ 아래한글</li>
							<li>2014.12 (국가공인) ITQ 한글엑셀</li>
							<li>2013.06 (국가공인) ITQ 한글파워포인트</li>
						</ul>
					</div>
				</div>

				<div className="con merit">
					<div className="merit-pin">
						{/*** 강점 ***/}
						<h2 className="sub-title">강점</h2>
						<div className="sub-con">
							{merits.map((merit, key) => (
								<div className={`merit${key+1}`} key={key}>
									<span>{merit.topic}</span>
									<div>
										<img src={merit.img} alt={merit.topic}/>
									</div>
									<div>{merit.desc}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;