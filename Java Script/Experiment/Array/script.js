
    function welcomeUser() {
        let name = prompt("Enter your name:");

        alert("Welcome " + name + "!");

        document.write("<h3>Hello " + name + ", Welcome to JavaScript!</h3>");
    }


    function checkAge() {
        let age = prompt("Enter your age:");

        let message1 = "";
        if (age >= 18) {
            message1 = "You are eligible to vote ✔";
        } else {
            message1 = "You are NOT eligible to vote ✖";
        }

        document.getElementById("result").innerHTML =
             message1 + "<br>" 
    }


    function arrayPractice() {
        let nums = [2, 5, 8, 10, 15];

        // map → double each number
        let doubled = nums.map(n => n * 2);

        // filter → keep only even numbers
        let evens = nums.filter(n => n % 2 === 0);

        // reduce → sum of all numbers
        let sum = nums.reduce((total, value) => total + value, 0);

        // forEach → create a text list
        let text = "";
        nums.forEach(n => {
            text += "Number: " + n + "<br>";
        });

        document.getElementById("result").innerHTML =
            "<b>Original:</b> " + nums + "<br>" +
            "<b>Doubled (map):</b> " + doubled + "<br>" +
            "<b>Even Numbers (filter):</b> " + evens + "<br>" +
            "<b>Sum (reduce):</b> " + sum + "<br>" +
            "<b>forEach Output:</b><br>" + text;
    }