let btnConsulta = document.getElementById("consulta");
btnConsulta.addEventListener("click", verInfo);

let title = document.getElementById("frase");


async function verInfo(){
    try{
       let rta = await fetch("mok.json");
       if(rta.ok){
        let aux = await rta.json();
        console.log(aux);

        title.innerHTML = aux.persona[0].nombre;
       }
    }catch{
       console.log("error al obtener los datos");
    }
}