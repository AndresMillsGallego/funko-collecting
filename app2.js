function askColor() {
    
    let colorChoice = prompt("Do you like this color? Yes or No?")
        if (colorChoice.toLowerCase() == "yes") {
            alert("Me too")
            return true;
        }
         else if (colorChoice.toLowerCase() == "no") {
         document.body.style.backgroundColor = ("#1E90FF");
         return true;
        
        }else{
            alert("Come again?");
            askColor();
            return false
        }
    };