const button = document.querySelector("button")
const input = document.querySelector("input")
const container = document.getElementById("container")
const form =document.querySelector("form")

container.addEventListener("click",(eo) => {
    
    switch (eo.target.className) {
        case "icon-trash-o icon":
        eo.target.parentElement.parentElement.remove();
        
        
                
        break;
         case "icon-sad2 icon":
        
            eo.target.classList.add("dn")
            const heart =`<span class="icon-heart"></span> `
               eo.target.parentElement.parentElement
             .getElementsByClassName("task-test")[0]
             .classList.add("finish");
             eo.target.parentElement.innerHTML += heart
                 
        
                
         break;
         case "icon-heart":
            eo.target.parentElement.parentElement
            .getElementsByClassName("task-test")[0]
            .classList.remove("finish");
           
            eo.target.classList.add("dn");
           
           const addAngry =`
            <span class="icon-sad2 icon "></span>
            `
            
           eo.target.parentElement.innerHTML += addAngry ;
                
        break;
        case "icon-star icon":
            eo.target.classList.add("orange");
        
        
            container.prepend(eo.target.parentElement); 
         break;
        case "icon-star icon orange":
            eo.target.classList.remove("orange");
                
        break;
         default:
                      break;
        }

}) ;


form.addEventListener("submit", (eo) => {
    eo.preventDefault()


    const task =
    `
    <div class="task">
 
    <span class="icon-star icon"></span> 
    

    <p class="task-test"> ${input.value}  </p> 
     
    <div> 

     <span class="icon-trash-o icon"></span>
     
     <span class="icon-sad2 icon dn "></span>
 </div>
 </div> 
 `

container.innerHTML += task   

} )






