function jisuan() {
	// body...
	sernum = parseInt(document.getElementById("shebeihao").value);
	serid = parseInt(document.getElementById("shebeiid").value);
	serdata = (document.getElementById("qixian").value);
	
	ss = serdata.toString().split("-");
	sss = ss[0] + ss[1] + ss[2];
	key = (sernum * serid - 1) * 470;
	key2 = sernum % 100;
	data = parseInt(sss + key2);
	a1 = ((key ^ data) % 100).toString();
	a2 = Math.trunc((key ^ data) / 100 % 100).toString();
	a3 = Math.trunc((key ^ data) / 10000 % 100).toString();
	a4 = Math.trunc((key ^ data) / 1000000 % 100).toString();
	a5 = Math.trunc((key ^ data) / 100000000).toString();
	//alert(a5 + "-" + a4 + "-" + a3 + "-" + a2 + "-" + a1);
	//alert(a2);
	var temp3 = document.getElementById("jieguo");
	temp3.innerHTML = a5 + "-" + a4 + "-" + a3 + "-" + a2 + "-" + a1;
}