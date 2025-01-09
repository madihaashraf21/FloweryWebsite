

document.getElementById("btn").addEventListener("click",function(event){
    event.preventDefault();
    
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var message=document.getElementById("msg").value;

if(name ==="" || email==="" || phone==="" || message===""){
    alert("Please fill all the Fields");
}
else{
    alert("Thank You for contacting us." +name + "We will contact you soon :)"); 
    
}



});