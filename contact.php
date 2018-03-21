<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Contact us</title>
</head>

<body>
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
        <input type="submit" name="submit" class="submit-button focus-style" value="Send">
    </form>
    <br class="clear"/>
</main>
</body>
</html>