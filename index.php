<!doctype html>
<html>
<head>
<link rel="shortcut icon" href="images/virusoftware-favicon-white.png">
<meta charset="utf-8">
<title>Virusoftware</title>
<link rel="stylesheet" href="styles/main.css">
<link rel="stylesheet" href="styles/header.css">
<link rel="stylesheet" href="styles/logo.css">
<link rel="stylesheet" href="styles/homepage.css">
<link rel="stylesheet" href="styles/footer.css">
<link href="https://fonts.googleapis.com/css?family=Abel|Saira+Condensed" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
    <?php include'include/navigationMenu.php';?>
    <script src="script/header.js"></script>
    <main>
        <section id="home-section">
            <div id="announcement-container">
                <h1>Offering quality software solutions</h1>
                <p id="info-text">Virusoftware is currently in pre alpha.<p>
                <br>              
                <br>
                <p>Get the latest news about Virusoftware:</p>
                <?php include'include/homepageForm.php';?>
            </div>
        </section>
        <section id="service-section">
            <h1>Services offered by Virusoftware</h1>
            <section class="service-section service-left">
                <h2 class="service-heading">Web development</h2>
            </section>
            <section class="service-section service-center">
                <h2 class="service-heading">Web applications</h2>
            </section>
            <section class="service-section service-right">
                <h2 class="service-heading">Software development</h2>
            </section>
        </section>
    </main>
    <?php include'include/footer.php';?>
    <script src="script/smoothScroll.js"></script>
</body>
</html>