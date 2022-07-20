const KEY= "users";
function saveUser(userObj){
    let oldData=readUsers();//getting local storage data
    oldData.push(userObj); //add the new user
    let value=JSON.stringify(oldData);
    //send the user to the local storage
    localStorage.setItem(KEY,value);
}
function readUsers(){
    let data=localStorage.getItem(KEY);
    console.log(data);// <-JSON
    if(data){
        return [];//creating the array
    }else{
        //we have data
        let list =JSON.parse(data);//parse the string to obj
        return list;//return the array with obj
    }
}