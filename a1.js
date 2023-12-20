const usersname = [
"Aditi",
"Inaya",
"Aarya",
"Kiara",
"Aadhya",
"Mithun",
"Pari",
"Jiya",
"Mehar",
"Amayra",
];   
function isUserPresent(all){
    if(usersname.includes(all)){
        console.log(`yes, ${all} is a valid user`);
        return true;
    } else {
        console.log(`No, ${all} not a valid user`);
        return true;
    }
}
isUserPresent("Mithun");
isUserPresent("someone");