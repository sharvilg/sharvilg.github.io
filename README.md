
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Anand Hospital, Kada</title>

    <!-- Internal CSS -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            color: #333;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            background-color: #1E3A8A;
            color: white;
            padding: 20px 0;
            text-align: center;
        }

        header h1 {
            font-size: 2.2em;
        }

        nav ul {
            list-style: none;
            padding: 0;
            text-align: center;
        }

        nav ul li {
            display: inline-block;
            margin: 10px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        section {
            padding: 40px 0;
        }

        .hero {
            position: relative;
            text-align: center;
        }

        .hero-img {
            width: 100%;
            height: auto;
            opacity: 0.8;
        }

        .hero-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: black;
            font-size: 1.8em;
            text-align: center;
            padding: 0 20px;
        }

        h2 {
            margin-bottom: 20px;
            font-size: 1.8em;
            color: black;
            text-align: center;
        }

        ul {
            list-style: none;
            padding: 0;
            text-align: center;
        }

        ul li {
            margin: 10px 0;
        }

        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 10px;
        }

        .gallery img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            transition: transform 0.3s;
        }

        .gallery img:hover {
            transform: scale(1.05);
        }

        address {
            font-style: normal;
            text-align: center;
        }

        footer {
            background-color: #1E3A8A;
            color: white;
            text-align: center;
            padding: 15px;
        }

        footer p {
            margin: 0;
        }

        /* Appointment Booking Styles */
        .appointment-form {
            margin-top: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 8px;
            width: 100%;
        }

        .appointment-form label {
            display: block;
            margin: 10px 0 5px;
        }

        .appointment-form input, .appointment-form button {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
        }

        .appointment-form button {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }

        .appointment-form button:hover {
            background-color: #45a049;
        }

        /* Responsive Media Queries */
        @media (max-width: 768px) {
            header h1 {
                font-size: 1.8em;
            }

            .hero-text {
                font-size: 1.4em;
                padding: 0 10px;
            }

            .container {
                width: 95%;
            }
        }

        @media (max-width: 480px) {
            nav ul li {
                display: block;
                margin: 5px 0;
            }

            h2 {
                font-size: 1.5em;
            }
        }
    </style>

    <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
</head>
<body>
    <header>
        <div class="container">
            <h1>Anand Hospital, Kada</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#doctors">Doctors Info</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home">
        <div class="hero">
            <img src="hospital-hero.jpg" alt="Hospital" class="hero-img">
            <div class="hero-text">
                <h2>Welcome to Anand Hospital, Kada</h2>
                <p>Your health is our priority. We provide comprehensive care with compassion and expertise.</p>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>About Us</h2>
            <p>At Anand Hospital, we are committed to providing the highest level of healthcare to our community. Our team of doctors and medical professionals are dedicated to ensuring that every patient receives personalized care in a comfortable and safe environment.</p>
        </div>
    </section>

    <section id="doctors">
        <div class="container">
            <h2>Doctors Information</h2>
            <p>Our experienced medical team is available for consultations, diagnoses, and treatment. Meet some of our doctors below:</p>
            <ul>
                <li>Dr. Pramod Prakash Bhalgat - </li>
                <li>Dr. Kavita Pramod Bhalgat - </li>
            </ul>
        </div>
    </section>

    <section id="gallery">
        <div class="container">
            <h2>Hospital Gallery</h2>
            <div class="gallery">
                <img src="hospital-image1.jpg" alt="Hospital Image 1">
                <img src="hospital-image2.jpg" alt="Hospital Image 2">
                <img src="hospital-image3.jpg" alt="Hospital Image 3">
                <img src="hospital-image4.jpg" alt="Hospital Image 4">
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to make an appointment, feel free to reach out to us!</p>
            <address>
                <p>Email: contact@anandhospitalkada.com</p>
                <p>Phone: +91 9423045614</p>
                <p>Address: Anand Hospital, Kada, India</p>
            </address>
        </div>
    </section>

    <!-- Appointment Booking Section -->
    <section id="appointment">
        <div class="container appointment-form">
            <h2>Book an Appointment</h2>
            <form id="appointment-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required>

                <label for="date">Preferred Date:</label>
                <input type="date" id="date" name="date" required>

                <button type="submit">Book Appointment</button>
            </form>
            <div id="confirmation-message" style="display: none;">Thank you! Your appointment request has been submitted.</div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Anand Hospital, Kada. All rights reserved.</p>
        </div>
    </footer>

    <script>
        (function(){
            emailjs.init("64KarrdjnwUAPBWk0"); // Replace with your EmailJS user ID
        })();

        document.getElementById("appointment-form").addEventListener("submit", function(event) {
            event.preventDefault();

            emailjs.sendForm("service_ku0r608", "template_4kyzodk", this)
                .then(function() {
                    document.getElementById("confirmation-message").style.display = "block";
                    document.getElementById("appointment-form").reset();
                }, function(error) {
                    console.error("Failed to send appointment request:", error);
                });
        });
    </script>
</body>
</html>
