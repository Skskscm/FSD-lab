<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
</head>
<body>

<h2>Add Student</h2>
<form method="POST">
    Name: <input type="text" name="name"><br>
    Email: <input type="text" name="email"><br>
    Mobile: <input type="text" name="mobile"><br>
    Department: <input type="text" name="department"><br>
    <button type="submit" name="submit">Submit</button>
</form>

<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $department = $_POST['department'];

    $sql = "INSERT INTO student(name,email,mobile,department)
            VALUES('$name','$email','$mobile','$department')";
    $conn->query($sql);
}
?>

<h2>Student Records</h2>
<table border="1">
<tr>
    <th>ID</th><th>Name</th><th>Email</th><th>Mobile</th><th>Dept</th><th>Action</th>
</tr>

<?php
$result = $conn->query("SELECT * FROM student");

while($row = $result->fetch_assoc()){
    echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['name']}</td>
        <td>{$row['email']}</td>
        <td>{$row['mobile']}</td>
        <td>{$row['department']}</td>
        <td>
            <a href='edit.php?id={$row['id']}'>Edit</a>
            <a href='delete.php?id={$row['id']}'>Delete</a>
        </td>
    </tr>";
}
?>

</table>

</body>
</html>