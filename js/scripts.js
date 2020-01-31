$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();
    var num = $("#user-input").val();
    var number = parseInt(num)

    var result= []
    var integers = []
    var beep = "Beep!"
    var boop = "Boop!"
    var sorry = "I'm sorry, Dave. I'm afraid I can't do that."

    var one = /[1]/i;
    var two = /[2]/i;
    var three = /[3]/i;

    for (i = 0; i <= num; i++) {
      if (i === 13) {
        result.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (i === 21) {
        result.push(boop)
      } else if (i === 32) {
        result.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (i === 0) {
        result.push('"0"')
      } else {
          if (i.toString().match(one)) {
            result.push(beep)
          } else if (i.toString().match(two)) {
            result.push(boop)
          } else if (i.toString().match(three)) {
            result.push(sorry)
          } else {
            result.push(i)
          }
      }
    }

    for (x=0; x <= number; x++) {
      integers.push(x)
    }
    $("#numberResult").text(integers)
    $("#notiResult").text(result)
    
  });
});
