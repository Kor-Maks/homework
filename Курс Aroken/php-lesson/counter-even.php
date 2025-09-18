<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php

    $num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for ($i = 0; $i < count($num); $i++) {
        if ($i % 2 == 0) {
            echo $num[$i];
        }
    }


    ?>

</body>

</html>