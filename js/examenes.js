$(document).ready(function () {
    $('.timepicker').timepicker({
        autoClose : true, 
        format : 'T!ime selected: h:i a'
    });
    $('.datepicker').datepicker({
        autoClose : true,
        format : 'yyyy-mm-dd',
        i18n:{
            months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
            monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
            weekdays:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
            weekdaysShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
            weekdaysAbbrev:["D","L","M","M","J","V","S"]
        }
    });

});

$(".btn").click(function(){
    let fecha = new Date($('.datepicker').val());
    let minutos_examen_seleccionado = getMinutos($('.timepicker').val());
    if(se_puede_agendar(fecha, minutos_examen_seleccionado)){
        let grupo = $("#grupo").val();
        let laboratorio = $("#laboratorio").val();
        let horaInicio = minutos_examen_seleccionado * 60;
        let horaFin = (minutos_examen_seleccionado + 90) * 60;
        $.ajax({
          url:"./examenes.php",
          method:"POST",
          data:{grupo:grupo, laboratorio:laboratorio, fecha:fecha, horaInicio:horaInicio, horaFin:horaFin},
          cache:false,
          success:function(respAX){
            let AX = JSON.parse(respAX);
            alert(AS.msj);
          }
        });
    } else{
        alert('No se pudo');
    }
    /*$.post("demo_test_post.asp",
    {
        name: "Donald Duck",
        city: "Duckburg"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });*/
});

function getMinutos(hora){
    let horas = parseInt(hora.slice(0,2));
    let minutos = parseInt(hora.slice(3,5));
    if(hora.slice(6, 8) == 'PM')
        horas += 12;
    minutos += horas*60;
    return minutos;
}

function se_puede_agendar(fecha, minutos_examen_seleccionado){
    var minutos_examenes = new Array(60, 100, 700, 1020, 1150);
    var i = 0;
    var se_puede = true;
    for(i=0; i<minutos_examenes.length; i++){
        if(minutos_examen_seleccionado < minutos_examenes[i]){
            if(i>0){
                if(minutos_examenes[i-1] + 105 > minutos_examen_seleccionado)
                    se_puede = false;
            } 
            if(minutos_examen_seleccionado + 105 > minutos_examenes[i])
                se_puede = false;
        } else{
            if(i == minutos_examenes.length-1 && minutos_examenes[i] + 105 > minutos_examen_seleccionado)
                se_puede = false;
        }
    }
    return se_puede;
}