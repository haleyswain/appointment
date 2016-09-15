$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    var starttimeInput = $("input#starttime").val();
    var endtimeInput = $("input#endtime").val();
    var day = $("#day").val();
    var service = $("input:radio[name=service]:checked").val();
    var date = $("#appointment").val();
    var color = $("#color").val();

    $('.name').text(nameInput);
    $('.starttime').text(starttimeInput);
    $('.endtime').text(endtimeInput);
    $('#confirmation').show();

    event.preventDefault();
  });

});
