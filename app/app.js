var cbm = function (canvasid, $) {
   // class cbm, which generates a cbm app on canvasid.

   const default_imagecount = 4;
   const default_height = 150;
   var imagecount = default_imagecount;
   var height = default_height;

   // generate layout
   $(canvasid).empty();
   $(canvasid).append("<h1>Find a nice emotion.</h1>");
   var controlrow = $('<tr></tr>');

   // buttonrow html-strings
   var celements = [
      "<input class=\"imgbutton\" type=\"button\" value=\"-\"></input>",
      "Images",
      "<input class=\"imgbutton\" type=\"button\" value=\"+\"></input>",
      "<div id=\"empty\"></div>",
      "<input class=\"sizebutton\" type=\"button\" value=\"-\"></input>",
      "Imagesize",
      "<input class=\"sizebutton\" type=\"button\" value=\"+\"></input>",
      "<div id=\"empty\"></div>",
      "<input class=\"dmodebutton\" type=\"button\" value=\"D\"></input>",
   ];

   // append buttons for control row
   var celement = $();
   for (i = 0; i < celements.length; i++) {
      celement = $('<td></td>');
      celement.append(celements[i]);
      controlrow.append(celement);
   }
   $(canvasid).append(controlrow);

   $(canvasid).append("<p id=\"img\"></p>");
   $(canvasid).append("<p id=\"clock\">Time: </p>");
   $(canvasid).append("<p id=\"correct\">Correct guesses: 0/0</p>");
   $(canvasid).append("<p id=\"ratio\">Ratio: Nan</p>");

   // set space between buttons
   $("#empty").width("15px");

   var dmodeon = false;

   $('.dmodebutton').click(function validateForm() {
      if (dmodeon) {
         $(".dmodebutton").val("L")
         dmodeon = false;
         $(canvasid).removeClass("darktheme");
      } else {
         $(".dmodebutton").val("D")
         $(canvasid).addClass("darktheme");
         dmodeon = true;
      }
   });

   $('.imgbutton').click(function validateForm() {
      // image count buttons pressed

      var type = $(this).attr("value")
      var newcount = imagecount
      if (type == "+") {
         newcount += 1;
      } else {
         newcount -= 1;
      }

      if (newcount > 1 && newcount < 6) {
         imagecount = newcount;
         drawImages();
      }
   });

   $('.sizebutton').click(function validateForm() {
      // image size buttons pressed

      var type = $(this).attr("value");
      var newsize = height;
      if (type == "+") {
         newsize += 10;
      } else {
         newsize -= 10;
      }

      if (newsize > 99 && newsize < 301) {
         // this is made easy by jquery (updated)
         height = newsize;
         $(".images").height(newsize);
      }
   });

   // url_happy & url_unhappy are stored in a json file under a variable "data".
   // data contains a dict that contains two words that separate url lists.
   // Url-lists are such as: ["url1.jpg", "url2.jpg", ...]
   // TODO: figure out open-source-sources to fill them automatically

   var timepassed = 0
   var correctguess = 0
   var totalguess = 0

   setInterval(function() {myTimer()}, 1000);
   drawImages();

   function drawImages(){
      // jquery
      url_happy = data["url_happy"];
      url_unhappy = data["url_unhappy"];

      numhappy = url_happy.length;
      numunhappy = url_unhappy.length;

      var happyrow = Math.floor(Math.random() * imagecount);
      var happycol = Math.floor(Math.random() * imagecount);

      var imagepath = "";
      var happyindex, imtable, imgrow, img, imgel;
      $('#img').empty();
      imtable = $('<table id="imtable" align=center></table>');
      for (j = 0; j < imagecount; j++) {
         imgrow = $('<tr></tr>');
         for (i = 0; i < imagecount; i++) {
               imgel = $("<td align=center></td>");
               if (i==happyrow && j==happycol) {
                  happyindex = Math.floor(Math.random() * numhappy);
                  img = url_happy[happyindex];
                  imgel.append("<img class=\"images\" height=" + height + " src='" + img + "'>"); //width=" + 0.75*height +"
                  imgel.click(function () {
                     processResult(true);
                  });
               }
               else {
                  unhappyindex = Math.floor(Math.random() * numunhappy);
                  img = url_unhappy[unhappyindex];
                  imgel.append("<img class=\"images\" height=" + height + "  src='" + img + "'>");
                  imgel.click(function () {
                     processResult(false);
                  });
               }
               imgrow.append(imgel);
         }
         imtable.append(imgrow);
      }
      $('#img').append(imtable);
   }

   function processResult(correct){
      totalguess +=1;

      if (correct){
         correctguess = correctguess + 1;
         drawImages();
      } else {
         //alert("Incorrect!");
         $("#imtable").css('background-color', 'red');
         $(".images").css('opacity', 0.5);
         setTimeout(function () {
               $(".images").css('opacity', 1);
               $("#imtable").css('background-color', 'white');}, 200);
      }
      document.getElementById("correct").innerHTML = "Correct: " + correctguess + "/" + totalguess;
      document.getElementById("ratio").innerHTML = "Ratio: " + Math.round(correctguess*100/(totalguess)) + "%";
   }

   function myTimer() {
      timepassed = timepassed + 1;
      document.getElementById("clock").innerHTML = "Time: " + timepassed;
   }

   // TODO: fix this function to opt out of js-script data-loading
   function loadData(filename) {
      fr = new FileReader();
      fr.onload = (function receivedText(e) {
         let lines = e.target.result;
         var newArr = JSON.parse(lines);
      });
      fr.readAsText(filename);
      return JSON.parse(xmlHttp.responseText);
   }
}