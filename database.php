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
$stmt = $conn->prepare("INSERT INTO surrender_requests (
    ownerName, ownerPhone, ownerEmail, petName, species, breed, age, gender, health, preferredShelter, reason, medicalHistory
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ssssssisssss",
    $_POST['ownerName'],
    $_POST['ownerPhone'],
    $_POST['ownerEmail'],
    $_POST['petName'],
    $_POST['species'],
    $_POST['breed'],
    $_POST['age'],
    $_POST['gender'],
    $_POST['health'],
    $_POST['preferredShelter'],
    $_POST['reason'],
    $_POST['medicalHistory']
);

// ✅ Execute DB insert first
if ($stmt->execute()) {
    // ✅ Send Emails only if DB insert is successful
    $mail = new PHPMailer(true);

    try {
        // SMTP settings for Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ramansingh.dev0@gmail.com'; // Your Gmail
        $mail->Password = 'gsrhmcmfyfstyteq';          // Your App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // ✅ Email to Admin
        $mail->setFrom('ramansingh.dev0@gmail.com', 'Pet Surrender Form');
        $mail->addAddress('rs64624ilu@gmail.com');
        $mail->addAddress('ramansingh143ss@gmail.com');
        $mail->addAddress('sachin2004feb@gmail.com');
        $mail->addAddress('dikshabhatt767@gmail.com');
        // Admin email
        $mail->Subject = 'New Surrender Request';
        $mail->Body = "A new surrender request has been submitted:\n\n" .
                      "Owner Name: {$_POST['ownerName']}\n" .
                      "Phone: {$_POST['ownerPhone']}\n" .
                      "Email: {$_POST['ownerEmail']}\n" .
                      "Pet Name: {$_POST['petName']}\n" .
                      "Species: {$_POST['species']}\n" .
                      "Breed: {$_POST['breed']}\n" .
                      "Age: {$_POST['age']}\n" .
                      "Gender: {$_POST['gender']}\n" .
                      "Health: {$_POST['health']}\n" .
                      "Preferred Shelter: {$_POST['preferredShelter']}\n" .
                      "Reason: {$_POST['reason']}\n" .
                      "Medical History: {$_POST['medicalHistory']}";

        $mail->send();

        // ✅ Confirmation Email to User
        $mail->clearAddresses();
        $mail->addAddress($_POST['ownerEmail']);
        $mail->Subject = 'Your Surrender Request Confirmation';
        $mail->Body = "Thank you for submitting your surrender request. Our team will contact you soon.";

        $mail->send();

    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo; // Show error if email fails
    }

    // ✅ Redirect after everything
    header("Location: https://laststopsolutions.in/?status=success");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>