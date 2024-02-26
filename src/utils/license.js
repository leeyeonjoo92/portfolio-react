const licenseH = () => {
	const toolH = document.querySelector(".tool").getBoundingClientRect().height;
	console.log("toolH : " + toolH);
	const license = document.querySelector(".license");
	console.log(license);

	license.style.height = toolH + "px";
	console.log("license : " + license.style.height);
}

export default licenseH;