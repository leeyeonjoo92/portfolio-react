const smooth = () => {
	// a태그 전체 찾기
	const anchors = document.querySelectorAll("a");

	// anchor로 하나씩 받아서
	anchors.forEach((anchor) => {
		// a태그 클릭할때
		anchor.addEventListener("click", function(e) {
			// a태그 기본동작 실행안함
			e.preventDefault();

			// 클릭한 a태그의 href
			const targetUrl = this.getAttribute("href");
			// href에 #이 붙어있기때문에 동명의 id값으로 찾을수있음
			const targetId = document.querySelector(targetUrl);

			// 해당 id요소로 스크롤 이동
			targetId.scrollIntoView({behavior: "smooth"});
		});
	});
};

export default smooth;