function displayUsers(usersArray){
    //travel the usersArray
    for(let i=0;i<usersArray.length;i++){
         let user=usersArray [i];
    //create the html row element
        tr+=`
            <tr class="user">
                <tr id=${user.firstName}>
                <td>${user.Lname}</td>
                <td>${user.email}</td>
                <td>${user.password1}/<td>
                <td>${user.password2}/<td>
                <td>${user.paymentMethod}/<td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phoneNumber}</td>
                <td><button class="btn btn-danger">Delete</button>


            </tr>
        `;

    }
    $("#user-table").append(tr);
}

function initListing(){
    console.log("Listing users");
    let users=readUsers();//from the store manager function
    displayUsers(users);
}
window.onload=init;