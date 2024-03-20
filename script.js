var arr = [
    {name:"Rose", image:"https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Iron-man", image:"https://images.unsplash.com/photo-1608278047522-58806a6ac85b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Aot", image:"https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Fitness", image:"https://images.unsplash.com/photo-1582910184841-2135ce4421bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Batman", image:"https://images.unsplash.com/photo-1611526114392-8d8e229f511d?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Spiderman", image:"https://images.unsplash.com/photo-1635805739892-ab7b431400f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Attack on Titan", image:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/attack-on-titan-finale.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"}
]

function getImage(obj){
    var image = "";
    arr.forEach(function(obj){
        image += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum dolor</div>
    </div>`
    })

    document.querySelector(".container").innerHTML = image;
}


getImage();