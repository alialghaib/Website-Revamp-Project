<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Load PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Configure PHPMailer for HostGator SMTP
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'mail.fjttco.com'; // Change to your HostGator SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'ali_alghaib@fjttco.com'; // Change to your HostGator email
        $mail->Password = 'moomzilla11'; // Use your HostGator email password
        $mail->SMTPSecure = 'ssl'; // Use 'tls' if you're using Port 587
        $mail->Port = 465; // Use 465 for SSL or 587 for TLS

        // Email settings
        $mail->setFrom('ali_alghaib@fjttco.com', 'FJ Trading Co.');
        $mail->addAddress('ali_alghaib@fjttco.com'); // Your HostGator email


        $mail->Subject = "New Contact from $name";
        $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

        $mail->send();
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } catch (Exception $e) {
        file_put_contents("debug_log.txt", "Mailer Error: " . $mail->ErrorInfo . "\n", FILE_APPEND);
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>
