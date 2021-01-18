<?php
    $conexion = mysqli_connect("localhost","root","password","proyecto_web");
    $sql = "SELECT * FROM examen;";
    $resultado = mysqli_query($conexion,$sql);
    $numFilas = mysqli_num_rows($resultado);

    $alumnos = "";
    while($filas = mysqli_fetch_array($resultado,MYSQLI_BOTH)){
        $alumnos .= "<tr><td>".$filas[0]."</td><td>".$filas[1]."</td></tr>";
    }
?>
<table>
    <thead>
        <tr><th>Usuario</th><th>Contrasena</th>
    </thead>
    <tbody>
        <?php echo $alumnos; ?>
    </tbody>
</table>