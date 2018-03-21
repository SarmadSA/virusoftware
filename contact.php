<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="styles/contactStyle.css">
<link rel="stylesheet" href="styles/main.css">
<link rel="stylesheet" href="styles/header.css">
<link rel="stylesheet" href="styles/logo.css">
<link rel="stylesheet" href="styles/homepage.css">
<link rel="stylesheet" href="styles/footer.css">
<link href="https://fonts.googleapis.com/css?family=Abel|Saira+Condensed" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<title>Contact us</title>
</head>

<body>
    <?php include'include/navigationMenu.php';?>
    <script src="script/header.js"></script>
    <main class="container">
    <div class="page-tittle"><h2>Contact us</h2></div>
    <form class="contact-form" action="styles/contact.php" method="post">
        <label for="name">Name:</label>
        <br>
        <input type="text" name="name" id="name" class="form-input input-placeholder focus-style" placeholder="Your name..">
        <span class="error-message"> *  </span>
        <br>
        <label for="email">E-mail:</label>
        <br>
        <input type="text" name="email" id="email" class="form-input input-placeholder focus-style" placeholder="Your email..">
        <span class="error-message"> * </span>
        <br>
        <label for="subject">Subject:</label>
        <br>
        <input type="text" name="subject" id="subject" class="form-input input-placeholder focus-style" placeholder="Enter the subject.."> 
        <span class="error-message"> </span>
        <br>
        <label for="message">Message:</label>
        <span class="error-message"> * </span>
        <br>
        <textarea id="message" name="message" class="contact-message input-placeholder focus-style" placeholder="Write your message.."></textarea>
        <br>
        <input type="submit" name="submit" class="submit-button" value="Send">
    </form>
    <br class="clear"/>
    <?php include'include/footer.php';?>
</main>
</body>
</html>