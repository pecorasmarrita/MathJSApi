function loadJavaDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("javascriptdemo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "http://api.mathjs.org/v4/?expr=2*(7-3)", true);
    xhttp.send();
  }


  