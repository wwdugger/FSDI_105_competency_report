function login(){
    console.log("Login Successful");
    //get the values from
    let txtPass=$("#txtPassword").val();
    let userEmail= $("#txtEmail").val();

    //use a flag
    let flag=true;
    //get the users form the local storage
    let users=readUsers(); //this is the user array

    //travel the user array
    for(i=0;i<userArray.length;i++){
        //get the user
        let user=userArray[i];
        //copare the input values with the values form the local storage
        if(user.email==userEmail && user.password==txtPass){
           window.location="users.html";
        }else{
            flag=false;
        }
    }
    if(!flag){
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000);
    }
}
function Init(){
    $("#loginBtn").click(login);
}
window.onload=init;