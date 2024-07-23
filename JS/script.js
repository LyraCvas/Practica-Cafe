//console.log(cafes);

//primer paso

botonTodos = document.querySelector("#todoscafes");
botonDisponibles = document.querySelector("#cafesdisponibles");

botonTodos.onclick = function(){
    botonTodos.classList.add("active")
    botonDisponibles.classList.remove("active")
}

botonDisponibles.onclick = function(){
    botonTodos.classList.remove("active")
    botonDisponibles.classList.add("active")
}


//segundo paso

let contenedor = document.getElementById("cont");

let img = cafes.img
let nombre = cafes.nombre
let precio = cafes.precio

//tercer paso

let cafesDisponibles = cafes.filter((cafe)=>{
    return cafe.disponibilidad.includes("Disponible");       
})

cafes.forEach((cafe) => {   
    contenedor.innerHTML += 
             `<article class="card-cafes grid a-center j-center">
                 <img class="img-cafes" src="./resources/imgs/cafes/${cafe.img}" alt="">
                 <div class="w-80 mg-auto g-10 d-flex j-between"">
                     <p class="ltrs-base ltrs-clr-1 ltrs-bld">${cafe.nombre}</p>
                     <p class="ltrs-base ltrs-clr-1 ltrs-bld">${cafe.disponibilidad}</p> 
                 </div>
                 <div class="w-80 mg-auto g-10 d-flex j-between">                    
                     <a href="#" class="a-btn a">Comprar</a>
                     <p class="ltrs-base ltrs-clr-1 ltrs-bld">Precio:<span> ${cafe.precio}</span></p>
                 </div>
             </article>`
});

botonTodos.addEventListener("click",()=>{
        contenedor.innerHTML = ""
    cafes.forEach((cafe) => {   
        contenedor.innerHTML += 
                 `<article class="card-cafes grid a-center j-center">
                     <img class="img-cafes" src="./resources/imgs/cafes/${cafe.img}" alt="">
                     <div class="w-80 mg-auto g-10 d-flex j-between"">
                         <p class="ltrs-base ltrs-clr-1 ltrs-bld">${cafe.nombre}</p>
                         <p class="ltrs-base ltrs-clr-1 ltrs-bld">${cafe.disponibilidad}</p> 
                     </div>
                     <div class="w-80 mg-auto g-10 d-flex j-between">                    
                         <a href="#" class="a-btn a">Comprar</a>
                         <p class="ltrs-base ltrs-clr-1 ltrs-bld">Precio:<span> ${cafe.precio}</span></p>
                     </div>
                 </article>`
        });
});

botonDisponibles.addEventListener("click",()=>{
        contenedor.innerHTML = ""
    cafesDisponibles.forEach((cafe) => {    
        contenedor.innerHTML += 
                 `<article class="card-cafes grid a-center j-center">
                     <img class="img-cafes" src="./resources/imgs/cafes/${cafe.img}" alt="">
                     <div class="w-80 mg-auto g-10 d-flex j-between"">
                         <p class="ltrs-base ltrs-clr-1 ltrs-bld">${cafe.nombre}</p>
                         <p class="ltrs-base ltrs-clr-1 ltrs-bld">${cafe.disponibilidad}</p> 
                     </div>
                     <div class="w-80 mg-auto g-10 d-flex j-between">                    
                         <a href="#" class="a-btn a">Comprar</a>
                         <p class="ltrs-base ltrs-clr-1 ltrs-bld">Precio:<span> ${cafe.precio}</span></p>
                     </div>
                 </article>`
        });
});