<?php
//获取本地文件
header("content-type:text/xml; charset=utf-8");
echo(file_get_contents("CA_firstSightOfXML.xml"));
?>