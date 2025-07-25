import router from "/js/router.v1.js";
import nav from "/js/components/nav.v1.js";
import footer from "/js/components/footer.v1.js";

const routes = {
    "/": [null, "home();"],
    "/disclaimer": ["disclaimer", "disclaimer();"],
    "/project/chipledger": ["chipledger", "project('chipledger');"],
    "/project/pouchtrack": ["pouchtrack", "project('pouchtrack');"],
    "/project/flashcarrd": ["flashcarrd", "project('flashcarrd');"],
    "/project/openchan": ["openchan", "project('openchan');"],
    "/project/wikimd": ["wikimd", "project('wikimd');"],
};

const hydrate = (path, flag) => {
    if (flag !== "noRefresh") {
        document.body.innerHTML = nav() + "<main id='main'></main>" + footer();
    }
    let main = document.getElementById("main");
    main.innerHTML = "";
    main.innerHTML += router(routes, path);
    if (routes[path] !== undefined) {
        if (routes[path][0] !== null) {
            document.title = routes[path][0] + " - benadryl.dev";
            document.getElementById("navPageTitle").innerHTML = routes[path][0];
        } else {
            document.title = "benadryl.dev";
            document.getElementById("navPageTitle").innerHTML = "";
        }
    } else {
        document.title = "page not found - benadryl.dev";
        document.getElementById("navPageTitle").innerHTML = "error 404";
    }
};

const rehydrate = (path) => {
    // Animation
    let opacity = 1; // Start with full opacity
    let direction = -0.05; // Initial direction: decrease opacity
    const interval = setInterval(() => {
        opacity += direction;
        main.style.opacity = opacity;
        // Change direction when reaching minimum or maximum opacity
        if (opacity <= 0.05 && direction < 0) {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // Scrolls to top of the page
            hydrate(path, "noRefresh"); // Hydrates without refreshing nav and footer
            window.history.pushState({}, "", path); // 
            direction = 0.05; // Start increasing
        } else if (opacity > 0.95 && direction > 0) {
            clearInterval(interval); // Stop when fully opaque again
        }
    }, 0.25); // Adjust interval time for desired speed
    main.style.opacity = 1.0;
};

let startingurl = window.location.pathname.toLowerCase();
if (startingurl.charAt(startingurl.length-1) == "/" && startingurl.length > 1) {
    startingurl = startingurl.substring(0,startingurl.length-1);
}

hydrate(startingurl);

window.addEventListener("popstate", (event) => {
    rehydrate(document.location.pathname);
});

window.hydrate = hydrate;
window.rehydrate = rehydrate;
