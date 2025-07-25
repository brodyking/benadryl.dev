const error = (errorCode) => {
    let errorMessage = "unknown error";
    switch (errorCode) {
        case "404":
            errorMessage = "page not found.";
            break;
    }
    return `<p>`+errorMessage+`</p>`;
}

export default error;