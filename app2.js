function askColor() {
    
    var colorChoice = prompt("Do you like this color?")
        if (colorChoice == "yes") {
            alert("Me too")
            return true;
        }
         if (colorChoice == "no") {
         document.body.style.backgroundColor = ("#1E90FF");
         return true;
        
        }else{
            alert("Come again?");
            return false
        }
    };