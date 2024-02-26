/****************************************************
 * 가져오기
 */

// 로고 이미지
import logoimg from "../assets/img/logo.png";

// 인트로 이미지
import introimg1 from "../assets/img/welcome.png";
import introimg2 from "../assets/img/mypage.png";

// 사용툴 이미지
import toolimg1 from "../assets/img/html.png";
import toolimg2 from "../assets/img/css.png";
import toolimg3 from "../assets/img/javascript.png";
import toolimg4 from "../assets/img/photoshop.png";
import toolimg5 from "../assets/img/illustrator.png";

// 강점 이미지
import meritimg1 from "../assets/img/search.png";
import meritimg2 from "../assets/img/fighting.png";
import meritimg3 from "../assets/img/book.png";

/****************************************************
 * 내보내기
 */

// 로고 이미지
export const Logo = logoimg;

// 인트로 이미지
export const intro1 = introimg1;
export const intro2 = introimg2;

// 사용툴
export const tools = [
	{
		img: toolimg1,
		text: "HTML",
	},
	{
		img: toolimg2,
		text: "CSS",
	},
	{
		img: toolimg3,
		text: "Javascript",
	},
	{
		img: toolimg4,
		text: "Photoshop",
	},
	{
		img: toolimg5,
		text: "Illustrator",
	}
];

// 강점
export const merits = [
	{
		topic: "꼼꼼합니다!",
		img: meritimg1,
		desc: "업무 시작 전 체크리스트를 작성하여 우선순위를 정리하고 빠트리는 일 없이 확인하며 작업합니다.",
	},
	{
		topic: "끈기가 있습니다!",
		img: meritimg2,
		desc: "원하는 효과를 구현하기 위하여 끝까지 포기하지 않습니다.",
	},
	{
		topic: "습득이 빠른편입니다!",
		img: meritimg3,
		desc: "한 번 배울때 잘 잊어버리지 않으며, 메모하는 습관으로 같은 질문을 다시 하지 않습니다.",
	}
];