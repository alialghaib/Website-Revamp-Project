<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require 'vendor/autoload.php'; // Load PHPMailer and Dotenv

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USERNAME'];
    $mail->Password = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = 'ssl';
    $mail->Port = $_ENV['SMTP_PORT'];

    $mail->setFrom($_ENV['SMTP_FROM_EMAIL'], $_ENV['SMTP_FROM_NAME']);
    $mail->addAddress($_ENV['SMTP_FROM_EMAIL']);

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

?>
