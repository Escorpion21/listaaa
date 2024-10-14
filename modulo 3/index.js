const informacion = document.querySelector("#Lista")
const buttonAdd = document.querySelector("#boton-agregar")
const  contenedor1 = document.querySelector("#contacts-list")
const button1 =  document.querySelector("#boton1")
const button2 =  document.querySelector("#boton2")
const tareas = document.querySelector(".tareas")
console.log(informacion)

let informacion1 = informacion.value
let NAME_REGEX = /^[a-zA-Z]*$/;
let campoVacio = document.querySelector("#campo-vacio")
let contacts = [""]

const getContactsLocal = localStorage.getItem('contacts-list');
const contactsLocal = JSON.parse(getContactsLocal);

const contactsManager = (() => {
    let contacts = [];

    const publicAPI = {
        getContacts: () => contacts,
        addContact: (newContact) => {
            contacts = contacts.concat(newContact);
            console.log('Guardado el nuevo contacto!');
        },
        saveInBrowser: () => {
            localStorage.setItem('contacts-list', JSON.stringify(contacts));
            console.log('Guardado en el navegador!');
        },
        renderContacts: () => {
            contenedor1.innerHTML = '';
            contacts.forEach(contact => {
                const listItem = document.createElement('li');
               
                listItem.classList.add('contacts-list-item');
                listItem.id = contact.id;

                listItem.innerHTML = `
                    <button id="boton1-${contact.id}"  class="boton1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-eliminated">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <p class="tareas">${contact.name}</p>
                    <button id="boton2-${contact.id}" class="boton1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-verif">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </button>
                `;

                contenedor1.appendChild(listItem);
                let total = contenedor1.children.length
                let informacion1 = document.querySelector("#informacion1")
                let informacion2 = document.querySelector("#informacion2")
                let informacion3 = document.querySelector("#informacion3")
                informacion1.textContent = "Total:" + total 

                const boton1 = document.querySelector(`#boton1-${contact.id}`);
                if (boton1) {
                  boton1.addEventListener("click", e => {
                    const tareas = listItem.querySelector(".tareas");
                       
                    if (tareas) {
                        tareas.classList.remove("tarea-confirmada");
                      tareas.classList.add("tarea-denegada");
                      
                     
                      
                      function contarUsoClase(nombreClase) { 
                        
                        return document.getElementsByClassName(nombreClase).length;}
                        let nombreClase = "tarea-denegada";
                    setTimeout(function () {   
                       
                        let conteo1 = contarUsoClase(nombreClase);
                        
                        console.log(`La clase "${nombreClase}" se usa ${conteo1} veces en el documento.`);
                        
                        

                        informacion3.textContent = "Incompleted:" + conteo1
                        
                    },100
                    
                    
               
                )
                    } else {
                      console.error("Elemento con clase 'tareas' no encontrado.");
                    }
                  })}
           
            
                const boton2 = document.querySelector(`#boton2-${contact.id}`);
                if (boton2) {
                  boton2.addEventListener("click", e => {
                    const tareas = listItem.querySelector(".tareas");
                   const clase = document.querySelector(".tarea-confirmada");
                        tareas.classList.remove("tarea-denegada");
                      tareas.classList.add("tarea-confirmada");
               
                  
                   
                      console.error("Elemento con clase 'tareas' no encontrado.");
                      function contarUsoClase(nombreClase) { 
                        
                        return document.getElementsByClassName(nombreClase).length;}
                        let nombreClase = "tarea-confirmada";
                    setTimeout(function () {   
                       
                        let conteo = contarUsoClase(nombreClase);
                        
                        console.log(`La clase "${nombreClase}" se usa ${conteo} veces en el documento.`);
                        
                        

                        informacion2.textContent = "Completed:" + conteo
                        
                    },100
                    
                    
               
                )
               
                  });
                } else {
                  console.error(`Botón con ID 'boton2-${contact.id}' no encontrado.`);
                }
             

               

            });
        },
        replaceContacts: (newContacts) => {
            contacts = newContacts;
        }
    };

    return publicAPI;
})();

buttonAdd.addEventListener("click", e => {
    let informacion1 = informacion.value;

    if (informacion1 && NAME_REGEX.test(informacion1)) {
        campoVacio.classList.remove("invalid");
        campoVacio.classList.add("verif");

        const newContact = { id: Date.now().toString(), name: informacion1 };
        contactsManager.addContact(newContact);
        contactsManager.saveInBrowser();
        contactsManager.renderContacts();
    } else {
        campoVacio.classList.remove("verif");
        campoVacio.classList.add("invalid");
    }
});



buttonAdd.addEventListener("click" , e => {
  

    
if ( informacion1){
   




const newContact = { id: Date.now().toString(), name: informacion1 };
contactsManager.addContact(newContact);
contactsManager.saveInBrowser();
contactsManager.renderContacts();
        
      


            
           
        
} else {

}
    
})




    console.log("hhh")



    window.onload = () => {
        const getContactsLocal = localStorage.getItem('contacts-list');
        const contactsLocal = JSON.parse(getContactsLocal);
    
        if (!contactsLocal) {
            contactsManager.replaceContacts([]);
        } else {
            contactsManager.replaceContacts(contactsLocal);
        }
    
        contactsManager.renderContacts();
    }
     