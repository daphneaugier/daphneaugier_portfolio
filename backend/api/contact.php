<?php
header("Content-Type: application/json");

// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["message" => "Invalid request method"]);
    exit;
}

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"), true);

// Validate data
if (empty($data["name"]) || empty($data["email"]) || empty($data["message"])) {
    echo json_encode(["message" => "All fields are required"]);
    exit;
}

$name = htmlspecialchars(strip_tags($data["name"]));
$email = filter_var($data["email"], FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars(strip_tags($data["message"]));
$sender_email = "daphne@daphneaugier.com";

if (!$email) {
    echo json_encode(["message" => "Invalid email address"]);
    exit;
}

// Email settings
$to = "daphne.augier@gmail.com";
$subject = "New Contact Form Submission on your Portfolio";
$headers = "From: $sender_email\r\nReply-To: $sender_email\r\nContent-Type: text/plain; charset=UTF-8";

$body = "Name: $name\nEmail: $email\nMessage:\n$message";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["message" => "Message sent successfully"]);
} else {
    echo json_encode(["message" => "Backend Failed to send message"]);
}
?>
