var request;
// Variable to hold request
$(document).ready(function(){
    $("button").click(function(){
        if($('#Signature').val().length <= null ){
        console.log("empty");
        
        $.ajax({url: "https://parndepu.github.io/tkwedding/main.html", success: function(result){
            $("#message").html("<font color=\"red\">กรุณากรอกข้อมูลให้ครบถ้วน <br/>Please fill out the form</font>");
        }});
    
        }else{
                console.log("not empty");
                // Abort any pending request
                if (request) {
                    request.abort();
                }
                // setup some local variables
                var $form = $(this);

                // Let's select and cache all the fields
                var $inputs = $form.find("input, select, button, textarea");

                // Serialize the data in the form
                var serializedData = $form.serialize();

                // Let's disable the inputs for the duration of the Ajax request.
                // Note: we disable elements AFTER the form data has been serialized.
                // Disabled form elements will not be serialized.
                $inputs.prop("disabled", true);

                // Fire off the request to /form.php
                request = $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbzaMh6EPfcLMfS9HdDEV8jw07PvscLx_Cj62YdaWR_3_fi28lk/exec",
                    type: "post",
                    data: serializedData
                });

                // Callback handler that will be called on success
                request.done(function (response, textStatus, jqXHR){
                    // Log a message to the console
                    console.log("Hooray, it worked!");
                    console.log(response);
                    console.log(textStatus);
                    console.log(jqXHR);
                });

                // Callback handler that will be called on failure
                request.fail(function (jqXHR, textStatus, errorThrown){
                    // Log the error to the console
                    console.error(
                        "The following error occurred: "+
                        textStatus, errorThrown
                    );
                });

                // Callback handler that will be called regardless
                // if the request failed or succeeded
                request.always(function () {
                    // Reenable the inputs
                    $inputs.prop("disabled", false);
                });

                // Prevent default posting of form
                event.preventDefault();
                $('#content').html('<h2>ขอบคุณครับ</h2><br/><h3>Happy Holidays</h3><h3>&<h3/><h3>Merry Christmas</h3><br/><a href="http://parndepu.github.io/tkwedding/main.html" class="btn btn-success" role="button"><font color="black">กลับไปหน้าหลัก</font></a>');
        }
    });
});