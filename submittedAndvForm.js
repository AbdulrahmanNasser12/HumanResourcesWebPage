function chekValid(){
    var n = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var reason = document.getElementById("r").value;
    var to = document.getElementById("t").value;
    var from = document.getElementById("f").value;
    re = /[0-9]/;
     if (n == "" ){
        alert("Erorr : Name can not be blank");
        document.getElementById("name").focus();
        return false;
     }
    if (re.test(n)){
         alert("Error : Name can not contain number")
         document.getElementById("name").focus();
         return false;
     }
    
     if(to<=from || to==""||from=="" ){
         alert("Error : vaction date is not valid");
        document.getElementById("t").focus;
        return false;

     }
     if (reason == "" ){
      alert("Erorr : Reason can not be blank");
      document.getElementById("r").focus();
      return false;
   }
  
     if (id == "" ){
      alert("Erorr : ID can not be blank");
      document.getElementById("id").focus();
      return false;
   } 
       alert("You entered a valid information");
       document.getElementById('name').focus;
       return true;
    
}
