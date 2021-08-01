//Ajax封装
function objToStr(obj){
    var res=[];
    for(var key in obj){
        res.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]));
    }
    return(res.join("&"));
}
function ajax(type,url,obj,timeout,succes,error){
    var str=objToStr(obj);
    var timer=null;
    var xmlhttp=new XMLHttpRequest();
    if(type=="GET"){
        xmlhttp.open(type,url+"?"+str,true);
        xmlhttp.send();
    }else{
        xmlhttp.open(type,url,true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(str);
    }
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