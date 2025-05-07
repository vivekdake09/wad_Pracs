    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
 
        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const errorMessage = document.getElementById("errorMessage");
 
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            errorMessage.textContent = "All fields are required!";
            return;
        }
 
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMessage.textContent = "Invalid email format!";
            return;
        }
 
        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters long!";
            return;
        }
 
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            return;
        }
 
        errorMessage.textContent = "";
 
        // Create user object
        const userData = { name, email, password };
 
        // Save to localStorage
        console.log("Saving to localStorage:", userData);
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        console.log("Saving user to localStorage:",userData);
        localStorage.setItem("users", JSON.stringify(users));
 
        // Simulate AJAX POST request (Mock API endpoint)
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("User Registered via AJAX:", data);
            alert("Registration Successful!");
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(userData);
            localStorage.setItem("users", JSON.stringify(users));
            console.log("Saved to localStorage:", users);
            window.open("users.html","_self"); // Redirect to user list page
        })
        .catch(error => console.error("Error:", error));
    });
