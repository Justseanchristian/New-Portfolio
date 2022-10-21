// Preload Stuff
document.body.classList.add('preload');

setTimeout( () => {
    document.body.classList.remove('preload');
}, 1000);

// Contact Form

function contactMe() {
    if (checkValidity()) {
        var templateParams = {
            subject: document.querySelector('.contact-subject').value,
            sender: document.querySelector('.contact-name').value,
            email: document.querySelector('.contact-email').value,
            message: document.querySelector('.contact-message').value
        };
    
        emailjs.send('service_el9nmqb', 'template_l04avbi', templateParams, 'XmK1XocgQ3SCDluIf')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });   
    }
    successfullySent();
}

function checkValidity() {
    const name = document.querySelector('.contact-name').value;
    const senderEmail = document.querySelector('.contact-email').value;
    const subject = document.querySelector('.contact-subject').value;
    const message = document.querySelector('.contact-message').value;

    if (name !== '' && senderEmail !== '' && subject !== '' && message !== '') {
        document.querySelector('.banner-success').style.display = 'block';
        setTimeout( () => {
            document.querySelector('.banner-success').style.animation = 'fadeFromTop 1.75s forwards';
        }, 5000)
        setTimeout( () => {document.querySelector('.banner-success').style.display = 'none';}, 7000 );

        return true;
    } else {
        document.querySelector('.banner-unsuccessful').style.display = 'block';
        setTimeout( () => {
            document.querySelector('.banner-unsuccessful').style.animation = 'fadeFromTop 1.75s forwards';
        }, 5000)
        setTimeout( () => {document.querySelector('.banner-unsuccessful').style.display = 'none';}, 7000 );

        return false;
    }
}

function successfullySent() {
    document.querySelector('.contact-name').value = '';
    document.querySelector('.contact-email').value = '';
    document.querySelector('.contact-subject').value = '';
    document.querySelector('.contact-message').value = '';
}

// Mobile Navigation

const hamburger = document.querySelector('.mobile-nav-menu-span');
const navigation = document.querySelector('.nav-container');
const navItem = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active'); 
});

