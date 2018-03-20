<!doctype html>
<html>
<head>
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
    <main>
        <section id="home-section">
            <?php include'include/navigationMenu.php'; ?>
            <script src="script/header.js" type="text/javascript"></script>
            <div id="announcement-container">
                <h1>Offering quality software solutions</h1>
                <p id="info-text">Virusoftware is currently in pre alpha.<p>
                <br>              
                <br>
                <p>Get the latest news about virusoftware:</p>
                <?php include'include/homepageForm.php';?>
            </div>
        </section>
        <section id="service-section">
            <h1>Services offered by virusoftware</h1>
            <section class="service-section service-left">
            
            </section>
            <section class="service-section service-center">
            
            </section>
            <section class="service-section service-right">
            
            </section>
        </section>
        <script src="script/smoothScroll.js"></script>
        <?php include'include/footer.php';?>
    </main>
</body>
</html>