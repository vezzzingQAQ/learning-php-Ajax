<?php
$objectList=array("shocked"=>array("title"=>"已经八点半了","info"=>"不知道俺画了个啥","img"=>"pictures/vezzzinga.jpg"),
    "sleepy"=>array("title"=>"熬夜肝大作业后","info"=>"俺要炸了国美!!!","img"=>"pictures/vezzzingb.jpg"),
    "normal"=>array("title"=>"正常状态下..","info"=>"回去得狠狠地补番了(☆▽☆)","img"=>"pictures/vezzzingc.jpg"));
//获取前端传递的参数
$name=$_GET["name"];
//根据传入的key获取字典
$obj=$objectList[$name];
//print_r($obj);
//将字典中内容取出返回前端
echo($obj["title"]);
echo("|");
echo($obj["info"]);
echo("|");
echo($obj["img"]);
?>