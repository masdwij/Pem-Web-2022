function hitung(){
    var myForm = document.formHitung;
    var x = eval(myForm.bil.value);
    var y = eval(myForm.bil2.value);
    var pil = myForm.opr.value;

    if(pil=="+"){
        var z = x+y;
    }else if (pil=="-"){
        var z = x-y;
    }else if (pil=="*"){
        var z = x*y;
    }else if (pil=="/"){
        var z = x/y;
    }
    
    
    myForm.hasil.value = z;
}
