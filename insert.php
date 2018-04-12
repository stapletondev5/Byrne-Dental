<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
// $call = $_POST['call'];
// $website = $_POST['website'];
// $priority = $_POST['priority'];
// $type = $_POST['type'];
$message = $_POST['message'];
$formcontent=" From: $name \n\n Phone: $phone \n\n Message: $message";
$recipient = "Castleknockdentalsurgery@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>