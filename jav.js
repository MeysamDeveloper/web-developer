
var myNodeList = document.getElementsByTagName('LI')
var i;
for(i = 0;i<myNodeList.length;i++){
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('\u00d7');
    span.className='close'
    span.appendChild(txt);
    myNodeList[i].appendChild(span)
}
var closeb = document.getElementsByClassName('close')
var i;
for(i=0; i<closeb.length; i++){
    closeb[i].onclick=function(){
        var div = this.parentElement;
        div.style.display='noun'
    }
}
var list = document.querySelector('ul')
list.addEventListener('click',function(ev){
    if(ev.target.tagname ==='LI'){
        ev.target.classlist.toggle('checked')
    }
},false)


function newElement(){
    var li = document.createElement('li')
    var inputValue = document.getElementById('item').value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue === ""){
        alert('this field can nit be empty')
    }else{
        document.getElementById('list').appendChild(li)

    }
    document.getElementById('item').value=''

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('/u00d7')
    span.appendChild(txt)
    li.appendChild(span)

    for(i=0; i <closeb.length;i++){
        closeb[i].onclick=function(){
            var div = this.parentElement;
            div.style.display='noun'
        }
    }


}
