var segundos
var minutos
var horas
var pausado = false


$(document).ready(function(){
    $("#pausar-jornada").css("display", "none")
    $("#reestablecer-jornada").css("display", "none")
    reestablecerJornada()
    setInterval(ponerFechaActual, 1000);
    cargarDatosEnVariables()

})

$("#comenzar-jornada").click(function(){
    setInterval(lanzarCronometro, 1000);
    $("#comenzar-jornada").css("display", "none")
    $("#pausar-jornada").css("display", "block")
    $("#reestablecer-jornada").css("display", "block")


})

$("#pausar-jornada").click(function(){
    if (!pausado){
        pausado = true
        guardarCronometro()
        $(this).html("<i class=\"bi bi-play-circle-fill\"></i> Reanudar jornada laboral")

    }else{
        pausado = false
        $(this).html("<i class=\"bi bi-pause-circle-fill\"></i> Pausar jornada laboral")

    }

})

$("#reestablecer-jornada").click(function(){
    reestablecerJornada()
    mostrarCronometro()
})



//funciones extra

function reestablecerJornada(){
    segundos = 0
    minutos = 0
    horas = 0
}

function lanzarCronometro(){
    if (!pausado){
        segundos++
        if (segundos > 59){
            minutos++
            segundos = 0
        }
        if (minutos > 59){
            horas++
            minutos = 0
        }
        if(horas > 10){
            horas = 0
        }
    }
    mostrarCronometro()
}

function ponerFechaActual(){
    let fecha = new Date()

    $(".hora-actual").html("<h2>"+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+
        fecha.getFullYear()+" - "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"</h2>"
    )
}

function guardarCronometro(){
    localStorage.setItem('segundos',segundos);
    localStorage.setItem('minutos',minutos);
    localStorage.setItem('horas',horas);
}

function cargarDatosEnVariables(){
    segundos = localStorage.getItem('segundos');
    minutos = localStorage.getItem('minutos');
    horas = localStorage.getItem('horas');

    if(segundos == null || minutos == null || horas == null){
        reestablecerJornada()
    }

    mostrarCronometro()



}

function mostrarCronometro(){
    $(".cronometro").html("<h2>"+horas+":"+minutos+":"+segundos+"<h2>")

}








