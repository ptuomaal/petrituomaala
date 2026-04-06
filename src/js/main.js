import Logo from "./logo.js";
import Skills from "./skills.js";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./serviceworker.js').then(function(registration) {
            // Check for updates on every page load
            registration.update();

            // When a new SW is found and installed, reload to activate it
            registration.addEventListener('updatefound', function() {
                const newWorker = registration.installing;
                newWorker.addEventListener('statechange', function() {
                    if (newWorker.state === 'activated') {
                        window.location.reload();
                    }
                });
            });
        });
    });
}

Logo()
Skills()
