for(let i = 10; i > 0; i--){
     document.write("<p>Perulangan ke-" + i + "</p>") 
    }

var ulangi = confirm("Apakah anda mau mengulang?"); 
var counter = 0;
    while(ulangi){ 
        var jawab = confirm("Apakah anda mau mengulang?") 
        counter++; 
        if(jawab == false){ 
        ulangi = false; 
        } 
    }
     document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");