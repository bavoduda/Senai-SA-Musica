var value;
var botao = document.getElementById("button");

botao.addEventListener("click",redirect,false);

function redirect(){
    var input = document.getElementById("busca").value;
    if(input=="Baby Justin Bieber"){
        window.location.href = "./musica1.html";
    }else if(input =="Peaches Justin Bieber"){
        window.location.href = "./musica2.html";   
    }else if(input =="Stay (feat. The Kid Laroi)-Justin-Bieber"){
        window.location.href = "./musica3.html";   
    }else if(input =="7 rings - Ariana Grande"){
        window.location.href = "./musica4.html";   
    }else if(input =="God is a Woman - Ariana Grande"){
        window.location.href = "./musica5.html";   
    }else if(input =="One Last Time - Ariana Grande"){
        window.location.href = "./musica6.html";   
    }else if(input =="Idiota - Jão"){
        window.location.href = "./musica7.html";   
    }else if(input =="Fim De Festa - Jão"){
        window.location.href = "./musica8.html";   
    }else if(input =="Me beija com raiva - Jão"){
        window.location.href = "./musica9.html";   
    }else if(input =="Modo Turbo - Luíza Sonza"){
        window.location.href = "./musica10.html";   
    }else if(input =="Braba - Luíza Sonza"){
        window.location.href = "./musica11.html";   
    }else if(input =="Boa Menina - Luíza Sonza"){
        window.location.href = "./musica12.html";   
    }else if(input =="Bad Romance - Lady Gaga"){
        window.location.href = "./musica13.html";   
    }else if(input =="Stupid Love - Lady Gaga"){
        window.location.href = "./musica14.html";   
    }else if(input =="Just Dance- Lady Gaga"){
        window.location.href = "./musica15.html";   
    }else{
        modal = document.getElementById("myModal");
        modal.style.display = "flex";
    }
    
}

function fechamodal(){
    modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function voltamenu(){
    window.location.href = "./index.html";
}