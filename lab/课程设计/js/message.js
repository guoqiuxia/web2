var show = document.createElement('show');
var send = document.getElementsByClassName('send')[0];
var typing = document.getElementsByClassName('typing')[0];
var warning = document.getElementsByClassName('warning')[0];
var get = document.getElementById('get');
var timer;
typing.onkeydown = function(e){
    if(e.keyCode == 13&&e.shiftKey==false){
        send.onclick();
        e.preventDefault();
       }
}
send.onclick = function(){
    if (typing.value == ''){
       warning.style.display = 'block';
       clearTimeout(timer);
       timer = setTimeout(function(){
           warning.style.display = 'none';
       },1000)
    }
    else{
       var li = document.createElement('li');
       li.className = 'rope';
       li.innerHTML =  '<p class="time">'+new Date().toLocaleString()+
                     '</p><p class="word"><span class="head"></span><span class="person">用户666</span></p><br><span class="conText">'
                     +typing.value+'</p>';
       get.appendChild(li);
       li.scrollIntoView();
       typing.value ='';
       typing.focus();
      }
}
var liNodes = document.getElementsByTagName("li");
for (var i=0; i<liNodes.length; i++){
    liNodes[i].onmouseover = function(){
        this.className = "subMenuShow";
    }
    liNodes[i].onmouseout = function(){
        this.className = "";
    }
}
