var arr = new Array('很差','差','一般','满意','非常满意');
var a = document.getElementsByTagName("img");
var con = false;
function starPic(count)
{
	if(con==true)
	{
		return 0;
	}
    if(count<=2)
    {        
    	for (var i=0; i<count;i++) 
    	{
    		a[i].src="images/star1.png";
    	}	
    }
    else if(count>2)
    {
    	for(var j=0;j<count;j++)
    	{
    		a[j].src="images/star2.png";
    	}
    }
    document.getElementById('comment').value=arr[count-1];
}
function hide(count)
{
	if(con==false)
	{
		for(var q=0;q<count;q++)
		{
			a[q].src="images/star0.png";
		}
		document.getElementById('comment').value='';
	}
	else if(con==true)
	{
		return 0;
	}
}
function qd(count)
{
	if(con==true)
	{
		return 0;
	}
	if(count<=2)
	{
		for(var p=0;p<count;p++)
		{
			arr[p].src="images/star1.png";
		}
	}
	else if(count>2)
	{
    	for(var m=0;m<count;m++)
    	{
    		arr[m].src="images/star2.png";
    	}
	}
	document.getElementById("comment").value=arr[count-1];
	con=true;
}