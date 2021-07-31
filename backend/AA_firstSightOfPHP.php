<?php
//php编写位置
//php注释
//
/*2338*/
//变量定义var改为$
$num=10;
//打印内容
echo $num;

echo"<br>";

//定义集合，数组
$arr=array(1,3,5);
print_r($arr);

echo"<br>";

//取出数组中的元素
echo $arr[2];

echo"<br>";

//定义字典【类】
$dict=array("name"=>"vezzzing","age"=>"2333");
print_r($dict);

echo("<br>");

//取出字典中的值
echo $dict["name"];

echo"<br>";

//分支循环语句和JS一模一样
$age=18;
if($age>=18){
    echo("2333");
}else{
    echo("3222");
}
//也可以这么写
echo("<br>");

$result=($age>=18)?"2333":"3222";
echo($result);

echo("<br>");

//switch
//for while
$arr2=array(1,3,5,7,9,11,13,15,17,19,21,23,25,27,29);
for($i=0;$i<count($arr2);$i++){
    echo($arr2[$i]);
    echo("<br>");
}

echo("<p>*******************</p>");

$index=0;
while($index<count($arr2)){
    echo($arr2[$index]);
    echo("<br>");
    $index+=1;
}
?>