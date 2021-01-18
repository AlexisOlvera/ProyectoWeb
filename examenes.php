<?php
  include("./configBD.php");
  
  $grupo = $_POST["grupo"];
  $laboratorio = $_POST["laboratorio"];
  $fecha = $_POST["fecha"];
  $horaInicio = $_POST["horaInicio"];
  $horaFin = $_POST["horaFin"];

  $sqlExamen = "INSERT INTO examen VALUES('$grupo','$fecha','$laboratorio',SEC_TO_TIME($horaInicio),SEC_TO_TIME($horaFin));";
  $resExamen = mysqli_query($conexion,$sqlExamen);
  $respAX = [];
  if(mysqli_affected_rows($conexion) == 1){
    $respAX["cod"] = 1;
    $respAX["msj"] = "Gracias :) Tu registro se guard&oacute; correctamente.";
  }else{
    $respAX["cod"] = 0;
    $respAX["msj"] = "Error. Favor de intentarlo nuevamente";
  }

  echo json_encode($respAX);
?>