let personas=[
    {id: 81, nombre:"Oscar"},
    {id: 82, nombre:"Alberto"},
    {id: 83, nombre:"Miguel"},
    {id: 84, nombre:"Pablo"}
];

let turno=0;
let cola=[];
let chat=[];

const etq_tarjetas = document.getElementById("tarjetas");
const etq_turno = document.getElementById("turno");
const etq_cola = document.getElementById("cola");

function dibujarTarjetas(){
    for (const persona of personas) {

        let etq_persona = document.createElement("div");
        etq_persona.className = "card col";

        let etq_img = document.createElement("img");
        etq_img.id = "imagen"+persona.id;
        etq_img.src = "images/joven3a.png";
        etq_img.className = "card-img-top w-50";
        etq_persona.append(etq_img);

        let etq_cardbody = document.createElement("div");
        etq_cardbody.className = "card-body";
        etq_cardbody.id = persona.id;

        let etq_h5 = document.createElement("h5");
        etq_h5.innerText = persona.nombre;

        let etq_button = document.createElement("button");
        etq_button.innerText = "Pedir turno";
        etq_button.className = "btn btn-primary";
        etq_button.id = "boton" + persona.id;
        etq_button.addEventListener("click", () => antiguoCambiarEstado(persona.id));

        etq_cardbody.append(etq_h5);
        etq_cardbody.append(etq_button);
        etq_persona.append(etq_cardbody);
        etq_tarjetas.append(etq_persona);

    }


}


function antiguoCambiarEstado(number){
    let etq_button = document.getElementById("boton"+number);
    let etq_persona = document.getElementById(number);
    let arrayElementos = etq_persona.children;
    let botonPulsado = arrayElementos[1];
    let imagen = document.getElementById("imagen"+number);


    //Primero en elegir turno
    if (turno === 0){
        let p = personas.find(x => x.id ===number);

        etq_turno.innerText = p.nombre;
        turno = p.id;
        etq_button.innerText = "Acabar turno";
        let imagen = document.getElementById("imagen"+p.id);
        imagen.src = "images/joven3c.png";

    } else if (turno !== number){
        //Si pulsa y el turno está cogido
        if (!cola.includes(number)){
            cola.push(number);
            etq_cola.innerText = cola.join(",");
            botonPulsado.innerText = "Esperando...";
            console.log(imagen.id);
            imagen.src = "images/joven3b.png"




        }

        //Si vuelve a pulsar cuando tiene el turno == dejar el turno
    } else if (turno === number){
        turno = 0;
            if (cola.length !== 0){
                let primero = cola[0];
                etq_turno.innerText = personas.find(x=> x.id === primero).nombre;

                cola.shift();
                etq_cola.innerText = cola.toString();
                turno = primero;
                botonPulsado.innerText = "Pedir turno";
                let siguienteBoton = document.getElementById("boton"+primero);
                let siguienteImagen = document.getElementById("imagen"+primero);

                imagen.src= "/images/joven3a.png";
                siguienteImagen.src = "/images/joven3c.png";
                siguienteBoton.innerText = "Acabar turno";

            }
    }

}


// function nuevoCambiarEstado(id) {
//     let etq_button = document.getElementById("boton"+id);
//     let etq_persona = document.getElementById(id);
//     let arrayElementos = etq_persona.children;
//     let botonPulsado = arrayElementos[1];
//    
//    
//     if(tieneTurno(id)) { //dejar el turno
//         soltarTurno(id);
//         turnoParaSiguiente();
//     } else {
//         if(estaEnCola(id)) { //dejar la cola
//             quitarDeCola(id);
//         } else { //pedir turno
//             if(turnoCogido()) {
//                 meterEnCola(id);
//             } else {
//                 darTurno(id);
//             }
//
//         }
//     }
// }
//
// function tieneTurno(id){
//     return turno === id;
// }
//
// function soltarTurno(id){
//     turno = 0;
// }
//
// function turnoParaSiguiente(){
//     if (cola.length !== 0){
//         let primero = cola[0];
//         etq_turno.innerText = personas.find(x=> x.id === primero).nombre;
//
//         cola.shift();
//         etq_cola.innerText = cola.toString();
//         turno = primero;
//         botonPulsado.innerText = "Pedir turno";
//         let siguienteBoton = document.getElementById("boton"+primero);
//         let siguienteImagen = document.getElementById("imagen"+primero);
//
//         siguienteBoton.innerText = "Acabar turno";
//
//     }
// }
//
// function estaEnCola(id){
//     return cola.find(x=> x.id === id);
// }
//
// function quitarDeCola(id){
//     cola.shift();
// }
//
// function turnoCogido(){
//     return turno.length>0;
// }
//
// function meterEnCola(id){
//     cola.push(id);
// }
//
// function darTurno(id){
//     turno = quitarDeCola(id);
// }