document.querySelector(".btn").addEventListener("click",function(event){
    event.preventDefault();
    
    var name=document.querySelector("input[placeholder='Your Name']").value;
    var email=document.querySelector("input[placeholder='Your E-mail']").value;
    var phone=document.querySelector("input[placeholder='Your PhoneNo']").value;

if(name ==="" || email==="" || phone==="" ){
    alert("Please fill all the Fields");
}
else{
    alert("Welcome " +name +"<3" ); 
    document.querySelector(".contact-box").reset();
    
}



});