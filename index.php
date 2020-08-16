<!DOCTYPE html>
<html lang="en" ng-app="termometro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Termometro Online</title>
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container my-5 text-center">
        <h1>Termometro Online</h1>
    
        <img class="logo my-2" src="favicon.png" alt="">
        <p>Misura in tempo reale quanti gradi ci sono nella tua città</p>

    
        <form method="get" id="city-submit">
            <div class="row mx-5">
                <div class="col-12 col-md-10">
                    <input id="city" type="text" name="city" class="form-control my-2">
                </div>
                <div class="col-12 col-md-2">
                    <button class="btn btn-primary btn-block my-2">Invio</button>
                </div>
            </div>
        </form>
    
        <div class="spinner-border my-5 d-none" role="status" id="loading-spinner">
            <span class="sr-only">Caricamento...</span>
        </div>
        <div id="result" class="display-1 d-none mb-5"></div>
    
    </div>

    <footer>
        <div class="fixed-bottom text-center text-white bg-dark pt-2">
            <p>Created by <a href="http://rosarioterranova.com">Rosario Terranova</a></p>
        </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>
