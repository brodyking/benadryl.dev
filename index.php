<?php

include("src/modules/copyDirectory.php");
include("src/modules/Parsedown.php");
include("src/modules/buildSite.php");
include("src/modules/deleteSite.php");
include("src/modules/login.php");
include("src/modules/logout.php");


// this is the password for the admin panel. 
// leaving this blank will turn off the password.
// putting "disabled" will disable the panel.
$key = "";

// parsedown stuff
$parsedown = new Parsedown();

// list of pages, config, components, blog, etc
$pages = json_decode(file_get_contents("src/pages.json"), true);
$config = json_decode(file_get_contents("src/config.json"), true);
$components = json_decode(file_get_contents("src/components.json"), true);
$blog = json_decode(file_get_contents("src/blog.json"), true);

// templates
$pagetemplate = file_get_contents($config["site.page.template"]);
$blogtemplate = file_get_contents($config["site.blog.template"]);

// auth variables
$isloggedin;
$isdisabled;

// checks if disabled
if ($key == "disabled") {
    $isdisabled = true;
} else {
    $isdisabled = false;
}

// checks key if not disabled
if (isset($_POST["key"])) {
    if ($_POST["key"] == $key) {
        // correct details
        login();
    } else {
        // incorrect details
        $isloggedin = false;
    }
} else if ($key == "") {
    // if blank, bypass login
    login();
} else if (isset($_GET["tempkey"]) && $_GET["tempkey"] == file_get_contents(".admintempkey")) {
    // temp key for refreshing.
    login();
} else {
    $isloggedin = false;
}



if (isset($_GET["action"]) && $isloggedin && !$isdisabled) {
    switch ($_GET["action"]) {
        case "build":
            buildSite(false);
            break;
        case "buildblog":
            buildBlog(true);
            break;
        case "buildpages":
            buildPages(true);
            break;
        case "delete":
            deleteSite();
            break;
        case "logout":
            logout();
            break;
    }
}

?>

<!DOCTYPE html>
<html>

<head>
    <title>switchboard</title>
    <link href="/assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="/assets/main.css" rel="stylesheet">
    <link href="/assets/bootstrap/icons/font/bootstrap-icons.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="/assets/icons/icon.png">
    <style>
        .card {
            margin-bottom: 15px;
        }
    </style>
</head>

<body class="pe-2 ps-2">

    <?php if (!$isloggedin && !$isdisabled) {

        echo '
        <h1 class="border-bottom">
            switchboard
        </h1>
        <p>
            build and test with this page.
        </p>
        <div class="alert alert-info rounded-0 border-4" style="border-top-style: none;border-right-style:none;border-bottom-style:none;" role="alert">
            <h3>security notice</h3>
            <hr class="mt-0">
            this page should never be visible to the public. <b>it is not secure.</b><br>
            only show contents in or from the <b>www/</b> directory.
        </div>
        <h3 class="border-bottom">login</h3>
        <p>the key can be found and modified at the top of the <b>index.php</b> file.</p>
            <form method="POST" action="switchboard.php">
              <div class="mb-3">
                  <input type="password" class="form-control" name="key" placeholder="private access key">
                </div>
              <div class="mb-3">
                  <button type="submit" class="btn btn-primary">login</button>
                  </div>
          </form>
        ';

    } else if (!$isdisabled) {
        echo '
        <h1 class="border-bottom">switchboard</h1>
        <p>
        debugger and compiler for <a href="https://benadryl.dev">benadryl.dev</a>
        </p>
        <h2 class="border-bottom">dev</h2>
        <p>
            <div class="row mb-4">

                <div class="col-sm">
                    <a href="?action=buildblog&tempkey=' . $tempkey . '" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="m-0 mb-1 p-0"><i class="bi bi-hammer"></i></h1>blog</a>
                </div>
                <div class="col-sm">
                    <a href="?action=buildpages&tempkey=' . $tempkey . '" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="m-0 mb-1 p-0"><i class="bi bi-hammer"></i></h1>pages</a>
                </div>
                <div class="col-sm">
                    <a href="?action=delete&tempkey=' . $tempkey . '" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="mb-0 mb-1 p-0"><i class="bi bi-trash-fill"></i></h1>delete</a>
                </div>
            </div>
            <h2 class="border-bottom">build and deploy</h2>
            <div class="row">
                <div class="col-sm">
                    <a href="?action=build&tempkey=' . $tempkey . '" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="m-0 mb-1 p-0"><i class="bi bi-hammer"></i></h1>site</a>
                </div>
                <div class="col-sm">
                    <a href="www/" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="mb-0 mb-1 p-0"><i class="bi bi-globe-americas"></i></h1>view</a>
                </div>
                <div class="col-sm">
                    <a href="https://github.com/brodyking/benadryl.dev/" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="mb-0 mb-1 p-0"><i class="bi bi-github"></i></h1>github</a>
                </div>
            </div>
        </p>
        <h2 class="border-bottom">account actions</h2>
        <p>
        <div class="row">
            <div class="col-sm">
                <a href="?action=logout&tempkey=' . $tempkey . '" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="mb-0 mb-1 p-0"><i class="bi bi-door-open-fill"></i></h1>logout</a>
            </div>
            <div class="col-sm"></div>
            <div class="col-sm"></div>
        </div>
        </p>
    </div>
    <h2 class="border-bottom">appearance</h2>

            <div class="form-check form-switch">
        dark mode <input class="form-check-input" type="checkbox" id="darkModeSwitch"
          data-bs-toggle="tooltip" data-bs-placement="top">
        </div>
    ';
    } else {
        echo "disabled";
    }
    ?>
    <p class="opacity-50 text-center mt-5">software written by brody king.</p> 
    <script src="/assets/darkmodetoggle.js"></script>
    <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>