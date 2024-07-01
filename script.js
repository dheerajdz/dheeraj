// const celsius = document.querySelector("#celsius")
// Frahnaiet = document.querySelector("Frahnaiet")
// //

// //
// celsius.addEventListener("input",()=> {
//     Frahnaiet.value = ((celsius.value * 9)/ 5 + 32).toFixed(2)})

document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    const celsius = document.querySelector("#celsius");
    const fahrenheit = document.querySelector("#fahrenheit");

    celsius.addEventListener("input", () => {
        if (celsius.value === '') {
            fahrenheit.value = ''; // Clear Fahrenheit input if Celsius is empty
        } else {
            fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2); // Convert to Fahrenheit with 2 decimal places
        }
    });
});
