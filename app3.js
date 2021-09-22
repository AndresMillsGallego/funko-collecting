function funkoCount() {
    let funkoQuantity = prompt("How many Funko Pops do you currently have?")
        if (funkoQuantity > 0 && funkoQuantity < 20){
            alert("You have " + funkoQuantity + " Funko Pops at this time.  Time to go shopping!")
        } else if (funkoQuantity > 20 && funkoQuantity < 40 ) {
            alert("You have " + funkoQuantity + " Funko Pops at this time.  That is a good start!")
        } else if (funkoQuantity > 40 && funkoQuantity < 75 ) {
            alert ("You have " + funkoQuantity + " Funko Pops at this time.  Dang! I am Jealous.")
        } else if (funkoQuantity > 75 && funkoQuantity < 100) {
            alert("You have " + funkoQuantity + " Funko Pops at this time.  Wow!  You may need more storage.....")
        } else if (funkoQuantity > 100) {
            alert("You have " + funkoQuantity + " Funko Pops at this time.  Time to call Guinness!!!")
        } else{ 
                alert("That is not a number")
                    funkoCount()
                    return false;
    }
};