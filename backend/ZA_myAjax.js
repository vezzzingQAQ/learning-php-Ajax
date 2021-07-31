//Ajax封装
function objToStr(obj){
    var res=[];
    for(var key in obj){
        res.push(key+"="+obj[key]);
    }
    return(res.join("&"));
}
function ajax(url,obj,timeout,succes,error){
    var str=objToStr(obj);
    var timer=null;
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url+"?"+str,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4){
            if(xmlhttp.status>=200 && xmlhttp.status<300 || xmlhttp.status==304){
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