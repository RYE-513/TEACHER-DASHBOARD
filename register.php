<?php
    $lastName = $_POST["lastName"];
    $firstName = $_POST["firstName"];
    $middleName = $_POST["middleName"];
    $gender = $_POST["gender"];
    $birth = $_POST["birth"];
    $number = $_POST["number"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $conn = new mysqli('localhost','root','','laco_nova_db');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect-error);
    }else{
        $stmt = $conn->prepare("INSERT INTO tbStudents(lastName, firstName, middleName, gender, birth, number, email, password)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind-param("ssssiiss",$lastName, $firstName, $middleName, $gender, $birth, $number, $email, $password);
        $stmt->execute();
        echo "Registered Successfully";
        $stmt->close();
        $conn->close();
    }
?>