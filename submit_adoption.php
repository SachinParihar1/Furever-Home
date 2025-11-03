<?php
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Database credentials
$host = "localhost";
$dbname = "u281877782_pets";
$username = "u281877782_pets_owner";
$password = "Pets#1234@";

// Connect to database
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL
$stmt = $conn->prepare("INSERT INTO adoption_requests (name, address, phone, email, pet) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss",
    $_POST['name'],
    $_POST['address'],
    $_POST['phone'],
    $_POST['email'],
    $_POST['pet']
);

// ✅ Execute DB insert first
if ($stmt->execute()) {
    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ramansingh.dev0@gmail.com';
        $mail->Password = 'gsrhmcmfyfstyteq'; // App password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // ✅ Email to Admin
        $mail->setFrom('ramansingh.dev0@gmail.com', 'Adoption Form');
        $mail->addAddress('rs64624ilu@gmail.com');
        $mail->addAddress('ramansingh143ss@gmail.com');
        $mail->addAddress('sachin2004feb@gmail.com');
        $mail->addAddress('dikshabhatt767@gmail.com');
        $mail->Subject = 'New Adoption Request';
        $mail->Body = "A new adoption request has been submitted:\n\n" .
                      "Name: {$_POST['name']}\n" .
                      "Address: {$_POST['address']}\n" .
                      "Phone: {$_POST['phone']}\n" .
                      "Email: {$_POST['email']}\n" .
                      "Selected Pet: {$_POST['pet']}";

        $mail->send();

        // ✅ Confirmation Email to User
        $mail->clearAddresses();
        $mail->addAddress($_POST['email']);
        $mail->Subject = 'Your Adoption Request Confirmation';
        $mail->Body = "Thank you for submitting your adoption request. Our team will contact you soon.";

        $mail->send();

    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }

    // ✅ Redirect after everything
    header("Location: https://laststopsolutions.in/?status=adoption_success");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>