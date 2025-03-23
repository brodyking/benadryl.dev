<?php

include("src/modules/copyDirectory.php");
include("src/modules/Parsedown.php");
include("src/modules/buildSite.php");
include("src/modules/deleteSite.php");
include("src/modules/login.php");
include("src/modules/logout.php");


// this is the password for the admin panel. if you wish to disable to admin panel, make it empty.
$key = "admin";

$phpb = ["version" => "v1"];
$parsedown = new Parsedown();
$pages = json_decode(file_get_contents("src/pages.json"), true);
$config = json_decode(file_get_contents("src/config.json"), true);
$components = json_decode(file_get_contents("src/components.json"), true);
$blog = json_decode(file_get_contents("src/blog.json"), true);

$pagetemplate = file_get_contents($config["site.page.template"]);
$blogtemplate = file_get_contents($config["site.blog.template"]);

$isloggedin;
$isdisabled;

if ($key == "") {
    $isdisabled = true;
} else {
    $isdisabled = false;
}

if (isset($_POST["key"])) {
    if ($_POST["key"] == $key) {
        login();
    } else {
        $isloggedin = false;
    }
} else if (isset($_GET["tempkey"]) && $_GET["tempkey"] == file_get_contents(".admintempkey")) {
    login();
} else {
    $isloggedin = false;
}

if (isset($_GET["action"]) && $isloggedin && !$isdisabled) {
    switch ($_GET["action"]) {
        case "build":
            buildSite();
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
    <title>Manage</title>
    <link href="/assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="/assets/main.css" rel="stylesheet">
    <link href="/assets/bootstrap/icons/font/bootstrap-icons.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .card {
            margin-bottom: 15px;
        }
    </style>
</head>

<body style="padding: 20px;">

    <?php if (!$isloggedin && !$isdisabled) {

        echo '
        <div class="card">
            <div class="card-body">
            <form method="POST" action="switchboard.php">
              <div class="mb-3">
                  <label class="col-form-label">Key</label>
                  <input type="password" class="form-control" name="key">
              </div>
             <button type="submit" class="btn btn-primary">Login</button>
          </form>
                        </div>
        </div> 
        ';

    } else if (!$isdisabled) {
        echo '
        <h1 class="border-bottom">switchboard</h1>
        <p>
        debugger and compiler for <code>benadryl.dev</code>
        </p>
        <h2 class="border-bottom">manage site</h2>
        <p>
            <div class="row">
                <div class="col-sm">
                    <a href="?action=build&tempkey=' . $tempkey . '" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="m-0 mb-1 p-0"><i class="bi bi-hammer"></i></h1>build site</a>
                </div>
                <div class="col-sm">
                    <a href="?action=delete&tempkey=' . $tempkey . '" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="mb-0 mb-1 p-0"><i class="bi bi-trash-fill"></i></h1>delete site</a>
                </div>
                <div class="col-sm">
                </div>
            </div>
        </p>
        <h2 class="border-bottom">account actions</h2>
        <p>
        <div class="row">
            <div class="col-sm">
                <a href="?action=logout&tempkey=' . $tempkey . '" class="btn btn-primary w-100 pt-3 pb-3"><h1 class="mb-0 mb-1 p-0"><i class="bi bi-door-open-fill"></i></h1>logout</a>
            </div>
            <div class="col-sm">
            </div>
            <div class="col-sm">
            </div>
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
    <script src="/assets/darkmodetoggle.js"></script>
    <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>