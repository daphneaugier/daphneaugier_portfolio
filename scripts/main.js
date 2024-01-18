document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const errorContainer = document.getElementById('error-container');
    const typedTextContainer = document.getElementById('typed-text');

    // header
    const textToType = "DAPHNÉ AUGIER";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            typedTextContainer.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(type, 10);
        }
    }

    window.onload = function () {
        type();
    };

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            displayError('Veuillez remplir tous les champs du formulaire.');
            return false;
        }

        if (!validateEmail(email)) {
            displayError('Veuillez entrer une adresse e-mail valide.');
            return false;
        }

        // TODO: add more validations

        return true;
    }

    function displayError(message) {
        errorContainer.textContent = message;
    }

    submitBtn.addEventListener('click', function () {
        errorContainer.textContent = ''; // Réinitialise les messages d'erreur

        if (validateForm()) {
            const formData = new FormData(form);

            fetch('votre-endpoint-backend', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Une erreur est survenue.');
                }
                return response.json();
            })
            .then(data => {
                alert('Formulaire soumis avec succès !');
                form.reset();
                // TODO: add animations + retours visuels
                form.style.backgroundColor = '#8bc34a';
            })
            .catch(error => {
                console.error('Erreur lors de la soumission du formulaire :', error);
                displayError('Une erreur s\'est produite. Veuillez réessayer.');
            });
        }
    });
});
