document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone =document.getElementById("phone").value;

    
    if(name === "" || email ==="" || phone === ""){
        alert("Fill All The Fields please :(")
    }else{
        alert("Welcome :)")
    }

});