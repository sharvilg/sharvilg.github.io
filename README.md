<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hospital Website</title>
    <style>
        /* General Body Styling */
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
        }

        /* Background Styling */
        .background {
            background-image: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }

        /* Container for the buttons */
        .container {
            text-align: center;
        }

        /* Button Styling */
        .button {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            font-size: 50px;
            padding: 20px 50px;
            margin: 20px;
            border: yellow;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        /* Button Hover Effect */
        .button:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }

    </style>
</head>
<body>

    <div class="background">
        <div class="container">
            <button class="button" onclick="window.location.href='anand hp 6.html'">PATIENT</button>
            <button class="button" onclick="window.location.href='staff.html'">STAFF</button>
        </div>
    </div>

</body>
</html>
