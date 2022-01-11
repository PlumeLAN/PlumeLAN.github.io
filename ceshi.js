function jisuan() {
	// body...
	var temp1 = document.getElementById("shebeihao");
	var sernum = temp1.innerHTML;
	var temp2 = document.getElementById("shebeiid");
	var serid = temp2.innerHTML;
	var temp3 = document.getElementById("jieguo");
	temp3.innerHTML = "sernum+serid";
	document.write(sernum);
}