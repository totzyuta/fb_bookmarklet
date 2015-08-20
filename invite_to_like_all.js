var z = document.getElementsByClassName("uiScrollableAreaWrap")[5];
for (var j=0; j<5; j++) {
  var x = document.getElementsByClassName("_1pu4");
  var y = x.length;
  z.scrollTop=z.scrollHeight;
  for (var i=0; i<y; i++) {
    x[i].click();
    alert(i);
  } 
}
alert("Hacked!");
