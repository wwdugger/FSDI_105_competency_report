//create the user constructor
class User {
    constructor(fname, lname, email, password, payment, color) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
        this.payment = payment;
        this.address = address;
        this.zipCode= zipCode
        this.age = age;
    }
}
function isValid(User){
    let valid=true;
    if(User.fname.length==0){
        valid=false;
        $("#txtFirstName").addClass("input-error");
        console.error("Please enter a valid username");
    }
    if(User.lname.length==0){
        valid=false;
        $("#txtLastName").addClass("input-error");
        console.error("Please enter your last name");
    }
    if(User.email.length==0){
        valid=false;
        $("#txtEmail").addClass("input-error");
        console.error("Please enter a valid email");
    }
    if(User.password.length==0){
        valid=false;
        $("#txtPassword").addClass("input-error");
        console.error("Please eneter a valid password");
    }
    if(string(User.age).length==0){
        valid=false;
        $("#numAge").addClass("input-error");
        console.error("Please eneter a valid age");
    }
    if(User.address.length==0){
        valid=false;
        $("#txtAddress").addClass("input-error");
        console.error("Please eneter a valid address");
    }
    return valid;
}
function validatePass(){
    console.log("Validating password");
    let txtPass= $("#txtPassword1"); //this is the element (input)
    let password= txtPass.val();// this is the value inside of the input
    if(password.length<6){
        txtPass.css("background-color","red"); //this jquery fn changes the css
    }
    else{
        txtPass.css("background-color","green");
    }
}
function passConfirmation(){
    let txtPass1= $("#txtPassword1").val();
    let txtPass2= $("#txtPassword2").val();
    if(txtPass1==txtPass2){
        console.log("The password is the same");
    }
    else{
        console.log("The password is diffeent");
    }
}
//create the register function
function register(){
    //get the values from the inputs
    let userName=$("#txtFirstName").val();
    let userLname=$("#txtLastName").val();
    let userEmail=$("#txtEmail").val();
    let userPass=$("#txtPassword1").val();
    let userPassConfirmation= $("#txtPassword2").val();
    let Paymentmethod=$("#txtPaymentmethod").val();
    let userAddress=$("#txtAddress").val();
    let userZipcode=$("#txtZipcode").val();
    let userAge=$("#numAge").val();
    // create the object
    let newUser = new User(userName, userLname, userEmail, userPassword, UsePayment, userAddress, userZipcode, userAge);
    console.log(newUser);
    if(isValid(newUser)){
        saveUser(newUser);
    }
}

function clearInputs(){
    let userName=$("#txtFirstName").val("");
    let userLname=$("#txtLastName").val("")
    let userEmail=$("#txtEmail").val("");
    let userPass=$("#txtPassword1").val("");
    let userPassConfirmation= $("#txtPassword2").val("");
    let Paymentmethod=$("#txtPaymentmethod").val("");
    let userAddress=$("#txtAddress").val("");
    let userZipcode=$("#txtZipcode").val("");
    let userAge=$("#numAge").val("");
}



function init(){
    $("#userForm").hide();
    //show the form
    $("#newUser").on("click",function(){
        $("#userForm").slideDown(3000);
    });
    //hide the form
    $("#newUser").on("click",function(){
        $("#userForm").sldeUp(3000);
    });

    $("#txtPassword1").keyup(validatePass);
    $("#txtPassword2").keyup(passConfirmation);
}

window.onload = init;