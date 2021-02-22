function loadJavaDoc() {
    var value = document.getElementById("jsinput").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("javascriptdemo").innerHTML = value + "=" +this.responseText;
      }
      else document.getElementById("javascriptdemo").innerHTML = "Errore durante il calcolo (controllare espressione)";
    };
    xhttp.open("GET", "http://api.mathjs.org/v4/?expr="+value, false);
    xhttp.send();
  }

  function loadJqueryDoc() {
    var value = document.getElementById("jqueryinput").value;
    $(document).ready(function(){
          $.ajax({url: "http://api.mathjs.org/v4/?expr="+value, 
          success: function(result){
            $("#jquerydemo").html(value + "=" +result);
          },
          error: function(){
            $("#jquerydemo").html("Errore durante il calcolo (controllare espressione)");
          }
        });
      });
  }

  function POSTloadJavaDoc() {
    var value = document.getElementById("POSTjsinput").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("POSTjavascriptdemo").innerHTML = value + "=" +this.responseText;
      }
      else document.getElementById("POSTjavascriptdemo").innerHTML = "Errore durante il calcolo (controllare espressione)";
    };
    xhttp.open("POST", "http://api.mathjs.org/v4/", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    console.log('{"expr": ['+ value +']}');
    xhttp.send('{"expr": ['+ value +']}');
  }


  