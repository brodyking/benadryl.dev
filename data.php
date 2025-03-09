<?php
$datajson = file_get_contents("data.json");
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
?>