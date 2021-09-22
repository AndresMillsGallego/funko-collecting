console.log('Hello World')

function getUserName() {
    let userName = prompt("What is Your Name?");
    
        if (typeof userName == "string") {
            alert("Welcome to the World of Funko " + userName);
                document.write("Welcome friend " + userName +"!");
                
} else {
    alert("Welcome to the World of Funko Cancel");
        document.write("Welcome friend Cancel!");
    }
};

getUserName()