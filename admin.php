<?php

include("src/modules/copyDirectory.php");
include("src/modules/Parsedown.php");
include("src/modules/buildSite.php");
include("src/modules/deleteSite.php");
include("src/modules/login.php");
include("src/modules/logout.php");


// this is the password for the admin panel. if you wish to disable to admin panel, make it empty.
$key = "";

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
    <title>phpb admin panel</title>
    <link href="/assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            font-family: Verdana, Geneva, sans-serif;
            font-size: 10pt;
            max-width: 800px;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .card {
            margin-bottom: 20px;
        }
        .card-header {
            background-color: #ff6600;
            color: black;
        }
        .card, .card-header {
            border-radius: 0px!important;
        }
        .card-body {
            background-color: #F6F6EF;
        }
        a {
            text-decoration: none;
            color: black;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <?php if (!$isloggedin && !$isdisabled) {

        echo '
        <div class="card">
            <div class="card-body">
            <form method="POST" action="admin.php">
            <input id="keyinput" type="password" name="key">
            <input type="submit">
            </form>
            </div>
        </div> 
        ';

    } else if (!$isdisabled) {
        echo '
    <div class="card">
        <h5 class="card-header">
            phpb admin panel
        </h5>
        <div class="card-body">
            version: '. $phpb["version"] . '
        </div>
    </div>
    <div class="card">
        <div class="card-body">
           Build Actions: [ <a href="?action=build&tempkey='.$tempkey.'">rebuild site</a> ] [ <a href="?action=delete&tempkey='.$tempkey.'">delete site</a> ] 
        </div>
    </div>
    <div class="card">
        <div class="card-body">
           Account Actions: [ <a href="?action=logout&tempkey='.$tempkey.'">logout</a> ]
        </div>
    </div>
    ';
    } else {
        echo "disabled";
    }
    ?>
</body>

</html>