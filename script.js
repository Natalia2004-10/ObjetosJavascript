let notas = [];

function Estudiante(nombre, edad, curso, notas){
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.notas = notas;
    (this.añadirNota = function(nota){
        let newNota = nota;
        notas.push(newNota);
        console.log(notas);
        
    }),
    (this.mostrarInformacion =  function(){console.log(this.nombre, this.edad, this.curso)}),
    (this.promedio = function(){ 
        let suma = 0;
        for(nota of notas){
            suma += nota;}
        let prom = suma / notas.length;
        console.log(prom)
    })
}

let gasto;
function Carro(marca, modelo, año, kilometraje, kpg){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = kilometraje;
    this.kpg = kpg;
    (this.añadirRecorrido = function(nuevoKilometraje){
        kilometraje = nuevoKilometraje + kilometraje;
        console.log(kilometraje)
    }),
    (this.calcularConsumo =  function(kilometros){
        gasto = kilometros/kpg;
        console.log(gasto)
    }),
    (this.mostrarInformacion = function(){ 
    console.log(this.marca, this.modelo, this.año, this.kilometraje) })
 }


 let estudiante1 = new Estudiante("Natalia", 16, "Terza Liceo",[5,6,7]);
 let estudiante2 = new Estudiante("Andrés", 12, "Seconda Media",[10, 8, 9]);
 let estudiante3 = new Estudiante("Andrea", 15, "Seconda Liceo",[8,7,7]);


 let carro1 = new Carro("Toyota", "Rav4", 2018, 10000, 31.6);
 let carro2 = new Carro("Nissan", "Qashqai", 2018, 50000, 28);
 let carro3 = new Carro("Audi", "A3 Sportback", 2015, 100000, 29);