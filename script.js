let friend = document.querySelector("h2")
let btn = document.querySelector("#add")

let option = 0

btn.addEventListener('click', function(){
    if(option==0){
        friend.innerHTML = "Friends"
        friend.style.color = "green"
        btn.innerHTML = "Remove Friends"
        btn.style.backgroundColor ="#a3a2a2"
        btn.style.color= "#fff"
        option=1
    }
    else{
        friend.innerHTML = "Stranger"
        friend.style.color = "red"
        btn.innerHTML = "Add Friends"
        btn.style.backgroundColor =" rgb(7, 128, 133)"
        option = 0
    }
})

