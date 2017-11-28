window.onload=function(){
	picScroll = document.getElementById("picScroll");
	picScroll1 = document.getElementById("picScroll1");
	var roll = setInterval(changeToLeft,10);
	picScroll.onmouseover=function(){
		clearInterval(roll);
	}
	picScroll.onmouseout=function(){
		roll = setInterval(changeToLeft,10);
	}
	function changeToLeft(){
		if(picScroll.scrollLeft>=(picScroll1.offsetWidth)){
			picScroll.scrollLeft = 0;
		}
		else{
			picScroll.scrollLeft += 1;
		}
	}
}