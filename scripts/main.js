function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs du formulaire.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Veuillez entrer une adresse e-mail valide.');
            return false;
        }

        return true;
    }

    submitBtn.addEventListener('click', function () {
        if (validateForm()) {
            const formData = new FormData(form);

            fetch('votre-endpoint-backend', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Formulaire soumis avec succès !');
                form.reset();
                // TODO: add animations + retours visuels
                form.style.backgroundColor = '#8bc34a';
            })
            .catch(error => {
                console.error('Erreur lors de la soumission du formulaire :', error);
                alert('Une erreur s\'est produite. Veuillez réessayer.');
            });
        }
    });
});
