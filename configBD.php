<?php
	$servidorBD = "localhost";
	$usuarioBD = "root";
	$contrasenaBD = "password";
	$nombreBD = "proyecto_web";
	$conexion = mysqli_connect($servidorBD,$usuarioBD,$contrasenaBD,$nombreBD);
	mysqli_query($conexion, "SET NAMES 'utf8'"); //Esta instrucción permite guardar eñes y acentos en la BD ;)
	if(mysqli_connect_errno($conexion)){
		die("Problemas con la conexi&oacute;n al servidor MySQL: ".mysqli_connect_error());
	}else{
		mysqli_query($conexion, "SET NAMES 'utf8'"); //Esta instrucción permite guardar eñes y acentos en la BD ;)
	}
?>