const list = document.querySelector(".list");

const listChildren = list.children;
let el = document.getElementById("app");
let el2 = document.getElementById("app2");





for (let item of listChildren) {
    if (el2.classList != ''){
        item.addEventListener("mouseover",
        
            function () {
                let target = item.dataset.target;

                el2.classList = "";
                el2.classList.add(target);

                    
        
                },false);
        
        
        item.addEventListener('mouseout', 
            function () {
                    
                    el2.classList = "";
                    el2.className = 'explanation2';
                    
                    
        
                 },false);
        } 
    else{
        el2.classList.add(list1);
        }
    }






