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

  function loadJqueryDoc() {
    $(document).ready(function(){
          $.ajax({url: "http://api.mathjs.org/v4/?expr=2*(7-3)", 
          success: function(result){
            $("#jquerydemo").html(result);
          },
          error: function(){
            $("#jquerydemo").html("Errore durante il calcolo");
          }
        });
      });
  }


  