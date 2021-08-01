//Ajax封装
function objToStr(obj){
    var res=[];
    for(var key in obj){
        res.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]));
    }
    return(res.join("&"));
}
function ajax(url,obj,timeout,succes,error){
    var str=objToStr(obj);
    var timer=null;
    var xmlhttp=new XMLHttpRequest();
    //url中不能出现中文encodeURIComponent("中文");
    xmlhttp.open("GET",url+"?"+str,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(ev2){
        if(xmlhttp.readyState===4){
            clearInterval(timer);
            if(xmlhttp.status>=200 && xmlhttp.status<300 || xmlhttp.status===304){
                succes(xmlhttp);
            }else{
                error(xmlhttp);
            }
        }
    }
    if(timeout!=0){
        timer=setInterval(function(){
            xmlhttp.abort();
            clearInterval(timer);
            alert("timeout");
        },timeout)
    }
}