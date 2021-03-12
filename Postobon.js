//ENTRADAS
let horasTrabajadas=40;
let nombreEmpleado="Juan Gallego Mesa";
let identificacionTrabajador="898488";


//PROCESO
if(horasTrabajadas<=40){
    let valorHora=20000;
    let totalDevengado=valorHora*horasTrabajadas;
    console.log("Señor: "+nombreEmpleado +" su salario fue de: $"+totalDevengado+ " Horas trabajadas: " +horasTrabajadas);
}else{
    let valorHoraNormal=20000;
    let valorHoraExtra=25000;
    
    let totalHorasNormales=valorHoraNormal*40;
    let totalHorasExtra=valorHoraExtra*(horasTrabajadas-40);

    totalDevengado=totalHorasExtra + totalHorasNormales;
    console.log("Señor: "+nombreEmpleado+" su salario fue de: $"+ totalDevengado + "Horas trabajadas:" +horasTrabajadas);
}
