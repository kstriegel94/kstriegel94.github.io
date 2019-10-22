$(function () {
    $('[data-toggle="popover"]').popover()
  })


function clickedCopyEmail() {
    // var copyText = document.getElementById("my-email").innerHTML;
    // console.log(copyText);
    // copyText.select();
    
    // document.execCommand("copy");

    // alert("Copied the text: " + copyText.value);
    const el = document.createElement("textarea");
    el.value = "kastriegel@gmail.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');

    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
        $("#success-alert").slideUp(500);
    });
    document.body.removeChild(el);
}