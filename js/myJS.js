function showPrice(id1) {

  
  var dlt = document.getElementById("dlt");
  var post = document.getElementById("post");
  var free = document.getElementById("free");

  var type = id1;
  console.log(type);

  if (type == "dlt") {
    dlt.style.display = "block";
    post.style.display = "none";
    free.style.display = "none";
  } else if (type == "post") {
    post.style.display = "block";
    dlt.style.display = "none";
    free.style.display = "none";

  } else if (type == "free") {
    free.style.display = "block";
    post.style.display = "none";
    dlt.style.display = "none";

  }
}
// dlt.style.display = "none";
    post.style.display = "none";
    free.style.display = "none";

var header = document.getElementById("divBtn");
var btns = header.getElementsByClassName("btn2");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active1");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active1", "");
  }
  this.className += " active1";
  });
}
