<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'samcooper$01');
define('DB_NAME', '127.0.0.1');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
if($link === false) {
  die("ERROR: Could not connect.".mysqli_connect_error());
}
?>