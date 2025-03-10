<?php
$datajson = file_get_contents("config.json");
$data = json_decode($datajson,true);

function siteName()
{
    global $data;
    return $data["siteName"];
}
function siteMotd() {
    global $data;
    return $data["siteMotd"];
}
function footerText() {
    global $data;
    return $data["footerText"];
}
function projects() {
    global $data;
    return $data["projects"];
}
function flags() {
    global $data;
    return $data["flags"];
}
function paperwork() {
    global $data;
    return $data["paperwork"];
}
function source() {
    return file_get_contents("config.json");
}
?>