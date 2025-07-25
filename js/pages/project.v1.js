const project = (projectName) => {
    let projectData = {
        "title": "",
        "body": "",
        "img": "",
        "website": "",
        "github": ""
    }
    switch (projectName) {
        case "chipledger":
            projectData.title = "chipledger";
            projectData.body = "chipledger is a web app that tracks buyins and cashouts for poker/blackjack home games.";
            projectData.img = "/img/project/chipledger.png";
            projectData.website = "chipledger.com";
            projectData.github = "github.com/brodyking/chipledger";
            break;
        case "pouchtrack":
            projectData.title = "pouchtrack";
            projectData.body = "this project aims at allowing one to track their nicotine intake, specifically nicotine pouches, to help those quit or try and manage their usage.";
            projectData.website = "pouchtrack.net";
            projectData.github = "github.com/brodyking/ptrack";
            break;
        case "flashcarrd":
            projectData.title = "flashcarrd";
            projectData.body = "a simple flashcard app written in php and javascript";
            projectData.website = "fc.benadryl.dev";
            projectData.github = "github.com/brodyking/flashcarrd";
            break;
        case "openchan":
            projectData.title = "openchan";
            projectData.body = "a free and open source imageboard script that doesn't require a database<br><span style='color:red;'>update: demo website removed because people think its funny to spam racial slurs.</span>";
            projectData.img = "/img/project/openchan.gif";
            projectData.github = "github.com/brodyking/openchan";
            break;
        case "wikimd":
            projectData.title = "wikimd";
            projectData.body = "a lightweight wiki software that allows for basic page creation in markdown.";
            projectData.github = "github.com/brodyking/wikimd";
            break;
    }
    let projectHtml = "";
    if (projectData.img !== "") {
        projectHtml += `<img src="`+projectData.img+`" style="max-width:100%;">`;
    }
    if (projectData.body !== "") {
        projectHtml += `<p style="margin-top:0px;">`+projectData.body+`</p>`;
    }
    if (projectData.website !== "") {
        projectHtml += `<a class="btn" style="margin-right:10px;" href="https://`+projectData.website+`">visit website (`+projectData.website+`)</a>`;
    }
    if (projectData.github !== "") {
        projectHtml += `<a class="btn" href="https://`+projectData.github+`">github (`+projectData.github+`)</a>`;
    }
    return projectHtml;
}

export default project;