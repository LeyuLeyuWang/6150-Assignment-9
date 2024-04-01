document.addEventListener('DOMContentLoaded', function () {
    const liveInUSCheckbox = document.getElementById('liveInUS');
    const zipcodeInput = document.getElementById('zipcode');

    function toggleZipcodeInput() {
        zipcodeInput.disabled = !liveInUSCheckbox.checked;
        if (!liveInUSCheckbox.checked) {
            zipcodeInput.value = '';
        }
    }

    toggleZipcodeInput();

    liveInUSCheckbox.addEventListener('change', toggleZipcodeInput);

    document.getElementById('pizzaSignupForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const yearOfBirth = document.getElementById('yearOfBirth').value;
        const liveInUS = document.getElementById('liveInUS').checked;
        const zipcode = document.getElementById('zipcode').value;
        const password = document.getElementById('password').value;
        const pizzaType = document.getElementById('pizzaType').value;

        if (!/^[A-Za-z]+$/.test(name)) {
            alert("Name must only contain letters.");
            return;
        }

        if (name.length < 3) {
            alert("Name must be at least 3 characters long.");
            return;
        }

        if (yearOfBirth < 1901 || yearOfBirth > 2099) {
            alert("Year of birth must be between 1901 and 2099.");
            return;
        }

        if (liveInUS && zipcode.length !== 5) {
            alert("Please enter a valid 5-digit US zipcode.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (pizzaType === "With pineapple" || pizzaType === "Without pineapple") {
            alert(`Accepted! Thank you for registering, ${name}! We will send the pizza ${pizzaType} to you!.`);
        }
        else {
            alert(`Accepted! Thank you for registering, ${name}! We won't send you any pizza!`);
        }
    })
});
