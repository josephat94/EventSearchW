var path_1='<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item"><div class="card h-100"><a href="#"><img class="card-img-top" style="height: 150px;" src="http://laveterinaria.mx';
//http://placehold.it/700x400
var path_2='" alt=""></a><div class="card-body"><h4 class="card-title">';
///Project One
var path_3='</h4><p class="card-text">';
//aque deserunt
var path_4='</p></div></div></div>';
$( document ).ready(function() {
    getLugaresNoFilter();
    $('#estadosSelect').select2({
        placeholder: 'Seleccciona un estado',
        width:"200px"
    });
    $('#municipioSelect').select2({
        placeholder: 'Seleccciona un municipio',
        width:"200px"
    });
    $('#tipoSelect').select2({
        placeholder: 'Seleccciona un tipo',
        width:"200px"
    });
});

function getLugaresNoFilter(){
    $.get( "http://laveterinaria.mx/REST/index.php/espacio/getEspacios/0", function( data ) {
        var espacios=data.DATA_CURRENT;
        $("#spaces").empty();
        for(i=0;i<espacios.length;i++){
            var ubicacion="<font style='font-size:12pt;'>"+espacios[i].Espacio.municipio+" , "+espacios[i].Espacio.estado+"</font><br>";
            var tar = path_1+""+espacios[i].Imagenes[0].ruta+path_2+""+espacios[i].Espacio.nombre;
            tar+= "<br>"+ubicacion;
            tar+=path_3+""+espacios[i].Espacio.descripcion.substring(0, 100);+""+path_4;
            tar+="<br><br>$"+espacios[i].Espacio.precio_minimo;
            tar+="<br>Max. "+espacios[i].Espacio.limite+" Personas";
            $("#spaces").append(tar);
 
   
        }
    });
}

function buscarFiltros(){
    var obj={};
    ($('#estadosSelect').val()=='none' ? null : obj.estado=$('#estadosSelect').val());
    ($('#municipioSelect').val()=='none' ? null : obj.ciudad=$('#municipioSelect').val());
    ($('#tipoSelect').val()=='none' ? null : obj.categoria=$('#tipoSelect').val());
    obj.limite=$('#personas').val();
    obj.presupusto=$('#presupuesto').val();
    $.post( "http://laveterinaria.mx/REST/index.php/espacio/getEspaciosFiltros",obj, function( data ) {
        var espacios=data.DATA_CURRENT;
        $("#spaces").empty();
        for(i=0;i<espacios.length;i++){
            var ubicacion="<font style='font-size:12pt;'>"+espacios[i].Espacio.municipio+" , "+espacios[i].Espacio.estado+"</font><br>";
            var tar = path_1+""+espacios[i].Imagenes[0].ruta+path_2+""+espacios[i].Espacio.nombre;
            tar+= "<br>"+ubicacion;
            tar+=path_3+""+espacios[i].Espacio.descripcion.substring(0, 100);+""+path_4;
            tar+="<br><br>$"+espacios[i].Espacio.precio_minimo;
            tar+="<br>Max. "+espacios[i].Espacio.limite+" Personas";
            $("#spaces").append(tar);
 
   
        }
    });
}