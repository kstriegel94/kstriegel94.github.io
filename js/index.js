$(function () {
    $('[data-toggle="popover"]').popover()
})


function clickedCopyEmail() {
    // var copyText = document.getElementById("my-email").innerHTML;
    // console.log(copyText);
    // copyText.select();
    
    // document.execCommand("copy");

    // alert("Copied the text: " + copyText.value);
    var el = document.createElement("textarea");
    el.value = "kastriegel@gmail.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}