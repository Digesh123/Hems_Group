// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


// function for  form 

// Initialize EmailJS
(function() {
    emailjs.init('k1wUTcC452As1hEMu');  // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the default way

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_62iiwte', 'template_0huctqp', {
        from_name: name,
        from_email: email,
        phone_number: phone,
        message: message
    }).then(function(response) {
        document.getElementById('response').innerHTML = "<p style='color: green;'>Your message has been sent successfully!</p>";
        document.getElementById('contact-form').reset();  // Reset form after submission
    }, function(error) {
        console.log(error);
        
        document.getElementById('response').innerHTML = "<p style='color: red;'>Oops! Something went wrong. Please try again.</p>";
    });
});
