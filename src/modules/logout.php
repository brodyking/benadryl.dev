<?php

function logout() {
    unlink(".admintempkey");
    Header("Location: switchboard.php");
}

?>