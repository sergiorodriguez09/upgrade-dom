//! 2.1 Inserta dinamicamente en un html un div vacio con javascript.

// let div = document.createElement("div")
// document.body.appendChild(div)

//! 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// let div = document.createElement("div") //Con las variables, añadimos a ellas elemenos HTML (div, p) 
// let p = document.createElement("p")
// document.body.appendChild(div)
// divTwo.appendChild(p)

//! 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

// let div = document.createElement("div")
// for (let i = 0; i < 6; i++) {
//     let p = document.createElement("p")
//     divThree.appendChild(p)
// }

// document.body.appendChild(div)

//! 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

// let p = document.createElement("p")
// p.innerHTML = "Soy dinámico!"
// document.body.appendChild(p)

//! 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// document.querySelector(".fn-insert-here").innerHTML = "Wubba Lubba dub dub"

//! 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// let ul = document.createElement("ul")
// for (let i = 0; i < apps.length; i++) {
//     let li = document.createElement("li")
//     li.innerHTML = apps[i]
//     ul.appendChild(li)
// }

// document.body.appendChild(ul)

//! 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// document.querySelectorAll(".fn-remove-me").forEach(item => item.remove()) 

//! 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

// let div= document.querySelectorAll("div")[1]
// let p=document.createElement("p")
// p.textContent="voy en medio!"
// document.body.insertBefore(p,div)

//! 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

// document.querySelectorAll("div.fn-insert-here").forEach((div)=>div.innerHTML=`<p>Voy Dentro!</p>`);