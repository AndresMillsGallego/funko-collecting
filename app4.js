function userRating() {
        let rating = prompt("How would you rate us? On a scale of 1-5 Freddies?");
            for (let i = 0; i < rating; i++) {    
               if(rating <= 5) { 
                document.write('<img id="freddie" src="https://covetly-prod-images.azureedge.net/8d402013-3dc9-4aab-a25e-556c7825a7bc-256x500.jpg">');
            } else if (rating > 5) {
                alert("Please enter a number between 1-5"); 
                return false;
            } else {
                alert("Error");
            }
        }
    };