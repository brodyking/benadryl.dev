<?php

function logout() {
    unlink(".admintempkey");
    Header("Location: admin.php");
}

?>