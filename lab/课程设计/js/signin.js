function processerbar(time){
    document.getElementById('probar').style.display="block";
	$("#line").each(function(i,item){
		var a=parseInt($(item).attr("w"));
		$(item).animate({
			width: a+"%"
		},time);
	});
    var si = window.setInterval(
	function(){
		a=$("#line").width();
		b=(a/1278*100).toFixed(0);
		document.getElementById('percent').innerHTML=b+"%";
		document.getElementById('percent').style.left=a-12+"px";
		document.getElementById('msg').innerHTML="&nbsp;&nbsp;"+"神游中";
		if(document.getElementById('percent').innerHTML=="100%"){
			clearInterval(si);
			document.getElementById('msg').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"+"登录成功";
			setTimeout(function(){
				window.open("message.html");
			},1000);
		}
	},70);
};