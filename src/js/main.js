import Logo from "./logo.js";
import Skills from "./skills.js";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./serviceworker.js').then(function(registration) {
            // Registration was successful

        }, function(err) {
            // registration failed :(
        });
    });
}

Logo()
Skills()