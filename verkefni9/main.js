"use strict";


function SynaSpurningu(spurning, htmltaggid)	{
	var NaSpurningu = window.document.getElementById(htmltaggid);
	var Quiz = "<h2>" + spurning.Spurning + "</h2>";

	Quiz += "<div>";

	for (var key in spurning.Valmoguleikar)
	{
		
		Quiz += "<div class='button' id=\"val" + key + "\">" + spurning.Valmoguleikar[key] + "</div>";
	}
	

	Quiz += "</div>";

	SaekjaSpurningu.innerHTML = Quiz;
}
//Hér koma spurningarnar og við vitum öll svarið við henni
var spurning1 = {
	Spurning: "Hvor er sterkari?",
	Valmoguleikar: ["Hulk", "Pálmi", "Iron Man", "Adam Sandler"],
	Svar: 2
};
var spurning2 = {
	Spurning: "Hvort kom fyrst?",
	Valmoguleikar: ["Egg", "Hænan"],
	Svar: 0
};
SynaSpurningu(spurning1, "spurning1");
SynaSpurningu(spurning2, "spurning2");