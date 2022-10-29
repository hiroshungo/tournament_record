const list = document.querySelector(".list");
//リスト要素の子要素（li）をすべて取得する
const listChildren = list.children;
let el = document.getElementById("app");

for (let item of listChildren) {
    if (el.classList != ''){
        item.addEventListener("mouseover",
        
            function () {
                let target = item.dataset.target;
            //id="app"の要素を取得
                
            //id="app"のclassをクリア
                el.classList = "";
            //id="app"に上で取得したtargetをclass属性で追加
                el.classList.add(target);

                    
        
                },false);
        
        
        item.addEventListener('mouseout', 
            function () {
                    
        //             //id="app"の要素を取得
                    
        //             //id="app"のclassをクリア
                    el.classList = "";
                    el.className = 'explanation';
        //             el.classList.add(list1);
        //             //id="app"に上で取得したtargetをclass属性で追加
                    
        
                 },false);
        } 
    else{
        el.classList.add(list1);
        }
    }