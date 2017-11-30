console.log("hello!");
var first_cafe_link = $(".btn-secondary").first();

first_cafe_link.removeClass("btn-secondary");
first_cafe_link.addClass("btn-secondary-closest");


window.navigator.geolocation.getCurrentPosition(function(pos) {
  console.log(pos);
});
