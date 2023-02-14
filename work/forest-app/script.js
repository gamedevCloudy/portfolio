let theme = "light";

let light = {};
light.background = "#f5f7fa";
light.color = "#454c52";
light.anylink = "#ffbdad";
light.themebutton = "Light Mode";	

let dark = {};
dark.background = "#1f2933";
dark.color = "#ced2d6";
dark.anylink = "#ffbdad";
dark.themebutton = "Dark Mode";

function isMobile() {
	return (window.innerWidth <= 800) && (window.innerHeight <= 800);
}

function SwitchTheme() {
	let current = (theme === "light") ? dark : light;

	document.body.style.background = current.background;
	document.body.style.color = current.color;
	
	document.getElementById("anylink").style.color = current.anylink;
	document.getElementById("anylink1").style.color = current.anylink;
	document.getElementById("anylink2").style.color = current.anylink;
	document.getElementById("anylink3").style.color = current.anylink;
	document.getElementById("anylink4").style.color = current.anylink;
	document.getElementById("anylink5").style.color = current.anylink;


	document.getElementById("themebutton").text = current.themebutton;

	theme = (theme === "light") ? "dark" : "light"; 
}

/* Dynamically set width */
window.addEventListener("resize", () => {
	if(isMobile()) {
		document.body.style.width = "95%";
	}
	else {
		document.body.style.width = "80%";
	}
});

/* Switch to dark theme as soon as page loads */
window.addEventListener("load", () => {
    SwitchTheme();
});