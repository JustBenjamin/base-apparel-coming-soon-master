 function submission() {
    let info = document.forms["shopper"]["email"].value;
    if (info == "") {
        alert("Please provide a valid email")
        return false
    }
 }