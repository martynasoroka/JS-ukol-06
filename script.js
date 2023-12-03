

function fillcut(str, len) {
    if (str.length > len) {
       return str.slice(0, len)
    }
     else if (str.length < len) {
        return str.padStart(len, ".")
    } 
    else if (str.length === len) {
        return str
    }
 }

 document.body.innerHTML += fillcut("Martyna", 12)