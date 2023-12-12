$(document).ready(function () {
    $("#BackButton").click(function () {
        window.location.href = "Blog.html";
    });

    function initMap() {
        // The location of your pet studio
        var petStudioLocation = { lat: 37.7749, lng: -122.4194 };
    
        // Create a map centered at the pet studio location
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: petStudioLocation
        });
    
        // Add a marker at the pet studio location
        var marker = new google.maps.Marker({
            position: petStudioLocation,
            map: map,
            title: 'Pawesome Pet Studio'
        });
    }

    // Toggle visibility of Pets Hotel content
    $("#pets-hotel h2").click(function () {
        $("#pets-hotel .collapsible-content").slideToggle();
    });

    // Toggle visibility of Pet Day Camp content
    $("#pet-day-camp h2").click(function () {
        $("#pet-day-camp .collapsible-set").slideToggle();
    });

    // Toggle visibility of Small Dogs Camp content
    $("#pet-day-camp h3:contains('Small Dogs Camp')").click(function () {
        $("#pet-day-camp .collapsible-set-content:contains('Small Dogs Camp')").slideToggle();
    });

    // Toggle visibility of Large Dogs Camp content
    $("#pet-day-camp h3:contains('Large Dogs Camp')").click(function () {
        $("#pet-day-camp .collapsible-set-content:contains('Large Dogs Camp')").slideToggle();
    });
});
