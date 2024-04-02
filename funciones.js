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
        etq_img.src = "images/joven3a.png";
        etq_img.className = "card-img-top";
        etq_persona.append(etq_img);
        let etq_cardbody = document.createElement("div");
        etq_cardbody.className = "card-body";
        let etq_h5 = document.createElement("h5");
        etq_h5.innerText = persona.nombre;
        let etq_button = document.createElement("button");
        etq_button.innerText = "Pedir turno";
        etq_button.className = "btn btn-primary";
        etq_button.id = "boton";
        etq_button.addEventListener("click", () => cambiarEstado(persona.id));
        etq_cardbody.append(etq_h5);
        etq_cardbody.append(etq_button);
        etq_persona.append(etq_cardbody);
        etq_tarjetas.append(etq_persona);

    }
    
    
}


function cambiarEstado(number){
    let etq_button = document.getElementById("boton");
    
    if (turno === 0){
        let p = personas.find(x => x.id ===number);
        etq_turno.innerText = p.nombre;
        turno = p.id;
        etq_button.innerText = "Acabar turno";
        
    } else {
        if (!cola.includes(number)){
            cola.push(number);
            etq_cola.innerText = cola.join(",");

        }
        
        
    }

}