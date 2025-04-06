<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);


    echo "<h2>Thank you for signing up!</h2>";
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";

}
?>
