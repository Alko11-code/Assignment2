        // Part 1: JavaScript Basics:

        // Calculating width and height 
        function calculateArea(width, height) {
            // Check if width and height are positive numbers
            if (width > 0 && height > 0) {
                const area = width * height;
                console.log(`The area of the rectangle is: ${area}`);
                return area;
            } else {
                // Handle invalid dimensions
                console.log("Width and height must be positive numbers.");
                return 0;
            }
        }

       
        // Example usage of calculateArea function with two sets of values
        const width1 = 5, height1 = 3;
        const width2 = 10, height2 = 7; 

        console.log("Calculating areas for two rectangles:");
        calculateArea(width1, height1); 
        calculateArea(width2, height2); 
        

        // Part 2: Event Handling
        function getRandomColor() {
            return `#${Math.floor(Math.random() * 13787215).toString(15)}`;
        }

        document.getElementById("clickMe").addEventListener("click", function () {
            alert("Button clicked!");
            this.style.backgroundColor = getRandomColor();
        });

        // Part 3: Manipulating the DOM
        document.addEventListener("DOMContentLoaded", function () {
            const ul = document.getElementById("myList");

            // Adding a new <li> item
            const newLi = document.createElement("li");
            newLi.textContent = "Fourth item";
            ul.appendChild(newLi);

            // Generating a random string
            function getRandomString(length = 8) {
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
                return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
            }

            // Add event listener to change text of clicked <li>
            ul.addEventListener("click", function (event) {
                if (event.target.tagName === "LI") {
                    event.target.textContent = getRandomString();
                    event.target.style.backgroundColor = getRandomColor(); // Optional visual feedback
                }
            });
        });

        // Part 4: CSS Box Model
        document.addEventListener("DOMContentLoaded", function () {
            const box = document.getElementById("box");

            // Change background color on click
            box.addEventListener("click", function () {
                this.style.backgroundColor = getRandomColor();
            });

            // Change border color on hover
            box.addEventListener("mouseover", function () {
                this.style.borderColor = getRandomColor();
            });

            box.addEventListener("mouseout", function () {
                this.style.borderColor = "black"; // Reset to default
            });
        });