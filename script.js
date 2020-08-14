$(document).ready(function() {
    $('#city-submit').submit(function(e) {
        e.preventDefault();
        $("#result").addClass("d-none");
        $("#loading-spinner").removeClass("d-none");
        $.ajax({
            type: "GET",
            url: 'weather.php',
            data: $(this).serialize(),
            success: function(response)
            {
                var jsonData = JSON.parse(response);
                $("#loading-spinner").addClass("d-none");
                $("#result").removeClass("d-none");
                $("#result").html(jsonData.current.temperature+"°");
           }
       });
     });
});