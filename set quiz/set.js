        
    function av(){
        let a=0;
        let b=0;
   
    
    if('A^B'==document.getElementById("A").value){
        a++;
    }
    else{
       b++;
    }
    
    if('A-B'==document.getElementById("B").value){
        a++;
    }
    else{
        b++;
    }

   if('B-A'== document.getElementById("C").value){
    a++;
   }
   else{
    b++;
   }

   if('A+B' == document.getElementById("D").value){
    a++;

   }
   else if('AUB' == document.getElementById("D").value){
    a++;
   }
   else{
    b++;
   }
   var c= "True = "+ a;
   var d= "False = "+ b;
    
document.getElementById("new").innerHTML = c ;
document.getElementById("new1").innerHTML = d ;



//at bottom
if('A^B'==document.getElementById("A").value){
    document.getElementById("k").innerHTML="  True"
    }
    else{
        document.getElementById("k").innerHTML="    False"
    }
    if('A-B'==document.getElementById("B").value){
        document.getElementById("l").innerHTML="   True"
    }
    else{
        document.getElementById("l").innerHTML="  False"
        }
if('B-A'== document.getElementById("C").value){
    document.getElementById("m").innerHTML="   True"
    }
   else{
    document.getElementById("m").innerHTML="  False"
       }
if('A+B' == document.getElementById("D").value){
    document.getElementById("n").innerHTML="   True"
     }
   else if('AUB' == document.getElementById("D").value){
    document.getElementById("n").innerHTML="   True"
     }
     else{
    document.getElementById("n").innerHTML="  False"
    
   } if(a<=2){
        document.getElementById("try").innerHTML="Try Harder"
    }
    else{
        document.getElementById("try").innerHTML="Not Bad"
    }

    }
   
    

    var bt = document.getElementById("sub");
    bt.addEventListener("click",av);
