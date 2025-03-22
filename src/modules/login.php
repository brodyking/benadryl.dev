<?php

function login() {
    global $isloggedin;
    global $tempkey;

    $isloggedin = true;

    $tempkey = random_int(0,999999);
    file_put_contents(".admintempkey", $tempkey);

}

?>