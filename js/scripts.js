
// Backend

var fToC = function(quantity) {
  return (quantity-32) * (5/9);
};

var cToF = function(quantity) {
  return ((9/5) * quantity) + 32;
};

var ozToLb = function(quantity) {
  return quantity * 16;
};

var lbToOz = function(quantity) {
  return quantity / 16;
};

var cupToMl = function(quantity) {
  return quantity * 250;
};

var mlToCup = function(quantity) {
  return quantity / 250;
};

var cupToTbsp = function(quantity) {
  return quantity * (50/3);
};

var tbspToCup = function(quantity) {
  return quantity * (3/50);
};

var tbspToTsp = function(quantity) {
  return quantity * 3;
};

var tspToTbsp = function(quantity) {
  return quantity / 3;
};
var selection = function(quantity, type) {
  if (type === 1) {
    return fToC(quantity);
  } else if (type === 2) {
    return cToF(quantity);
  } else if (type === 3) {
    return ozToLb(quantity);
  } else if (type === 4) {
    return lbToOz(quantity);
  } else if (type === 5) {
    return cupToMl(quantity);
  } else if (type === 6) {
    return mlToCup(quantity);
  } else if (type === 7) {
    return cupToTbsp(quantity);
  } else if (type === 8) {
    return tbspToCup(quantity);
  } else if (type === 9) {
    return tbspToTsp(quantity);
  } else {
    return tspToTbsp(quantity);
  }
}

// Front-End

$(function(){
  $("form#conversion").submit(function() {
    event.preventDefault();
    var quantity = $("input#unit").val();
    console.log(quantity)
    var type = parseInt($("#unitType").val());
    console.log(type)

    var result = selection(quantity, type)
    $(".output").text(result);
    $("#conversion").show();

  });
});
