/**
 * Age Verification Overlay - JQuery Script
 * @author Leamsi Fontánez
 * R1 Software htttp://r1software.com
 * 
 */

// Set the minumum age to allow
const threshold = 21;
// Set the cookie duration in days
const days = 30;
// Set the duration of error in seconds
const err_timer = 5;

$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    var ageVerificationCookie = "ageVerified";

    function isAgeValid(year) {
        var age = currentYear - year;
        return age >= threshold;
    }

    function hideDivAndSetCookie() {
        $("#R1_PORTAL").hide();
        document.cookie = ageVerificationCookie + "=true; expires=Fri, 31 Dec " + (currentYear + days) + " 23:59:59 UTC; path=/";
    }

    function showError(message) {
        $(".r1-age-verification-item-error").text(message).addClass("r1-age-verification-item-errorShow");
        setTimeout(function() {
            $(".r1-age-verification-item-error").removeClass("r1-age-verification-item-errorShow");
            // Optional redirect
            window.location.href = "https://google.com"; // Uncomment this line to redirect
        }, err_timer * 1000);

    }

    $(".r1-age-verification-item-allow-year-input").on("input", function() {
        var input = $(this).val();
        var sanitizedInput = input.replace(/[^0-9]/g, '').slice(0, 4);
        if (parseInt(sanitizedInput) > currentYear) {
            sanitizedInput = currentYear.toString();
        }
        $(this).val(sanitizedInput);
    });

    $(".r1-age-verification-item-allow-year-submit").click(function() {
        var year = parseInt($(".r1-age-verification-item-allow-year-input").val());

        if (isNaN(year) || year.toString().length !== 4 || year > currentYear) {
            showError("Please enter a valid 4-digit year not greater than the current year.");
        } else if (isAgeValid(year)) {
            hideDivAndSetCookie();
        } else {

            // Display error 
            showError("You are not old enough to view this content. Please navigate away.");
        }
    });

    $("#R1_PORTAL").show();
    // Check if the cookie exists
    if (document.cookie.indexOf(ageVerificationCookie + "=true") !== -1) {
        $("#R1_PORTAL").hide();
    }
});