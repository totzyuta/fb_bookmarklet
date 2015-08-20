var z = document.getElementsByClassName("uiScrollableAreaWrap")[0];
for (var j=0; j<3; j++) {
  var x = document.getElementsByClassName("_42ft _4jy0 _4jy3 _4jy1 selected _51sy");
  var y = x.length;
  z.scrollTop=z.scrollHeight;
  for (var i=0; i<y; i++) {
    if (x[i].getAttribute("class") === "_42ft _4jy0 _4jy3 _4jy1 selected _51sy") {
      x[i].click();
    }
    alert(i);
  } 
}
alert("Hacked!");
