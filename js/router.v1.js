import error from "/js/pages/error.v1.js";
import home from "/js/pages/home.v1.js";
import disclaimer from "/js/pages/disclaimer.v1.js";
import project from "/js/pages/project.v1.js";

const router = (routes,path) => {
    let paramList = [];
    let paramsSearch = new URLSearchParams(window.location.search);
    for (const element of paramsSearch.keys()) {
        paramList[element] = params.get(element);
    }
    if (routes[path] !== undefined) {
        return eval(routes[path][1]);
    } else {
        return error("404");
    }
}

export default router;
