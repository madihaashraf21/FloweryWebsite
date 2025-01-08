

document.querySelector(".btn").addEventListener("click",function(event){
    event.preventDefault();
    
    var name=document.querySelector("input[placeholder='Your Name']").value;
    var email=document.querySelector("input[placeholder='Your E-mail']").value;
    var phone=document.querySelector("input[placeholder='Your PhoneNo']").value;
    var message=document.querySelector("textarea[placeholder='Message']").value;

if(name ==="" || email==="" || phone==="" || message===""){
    alert("Please fill all the Fields");
}
else{
    alert("Thank You for contacting us." +name + "We will contact you soon :)"); 
    document.querySelector(".contact-box").reset();
    
}



});