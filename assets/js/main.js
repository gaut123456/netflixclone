function goRight(variable) {
  document.getElementById(variable).scrollLeft += 304;
};
function goLeft(variable) {
  document.getElementById(variable).scrollLeft -= 304;
};

window.onload = function () {

  var MyList = document.getElementById("my");
  var watchit = document.getElementById("watchit");
  var ActionAdventures = document.getElementById("action");
  var Comedies = document.getElementById("tvshow");
  var Japan = document.getElementById("Japanese");
  var MyListdata = ['all-of-us.jpg', 'arnaqeur.jpg', 'comment-elever-un-super-heros.jpg', 'feria.jpg', 'gotham.jpg', 'inception.jpg'];
  var watchitdata = ['les-voyageurs-du-temps.jpg', 'mr-robot.jpg', 'naruto.jpg', 'pera.jpg', 'snowpiercer.jpg', 'spider-man.jpg'];
  var ActionAdventuresdata = ['formula.jpg', 'leregne.jpg', 'stranger-thing.jpg', 'the-flash.jpg', 'the-witcher.jpg', 'vikings.jpg'];
  var Comediesdata = ['auxtrouble.jpg', 'babydriver.jpg', 'boys.jpg', 'immortel.jpg', 'ligneverte.jpg', 'zodiac.jpg'];
  var Japandata = ['arnaques.jpg', 'dolar.jpg', 'gantz.jpg', 'manonfire.jpg', 'samourai.jpg', 'scarface.jpg'];
  let i = 0;

  // My List

  // var arr = [];
  // while (arr.length < MyListdata.length) {
  //   var r = Math.floor(Math.random() * MyListdata.length);
  //   if (arr.indexOf(r) === -1) arr.push(r);
  // }
  // i = 0;

  // while (i < MyListdata.length) {
  //   MyList.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/preview/MyList/' + MyListdata[arr[i]] + '" class="rounded hover:scale-125 hover:absolute hover:z-50"></a></div></div>')
  //   i++;
  // }

  // watch it

  var arr = [];
  while (arr.length < MyListdata.length) {
    var r = Math.floor(Math.random() * MyListdata.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  i = 0;
  while (i < watchitdata.length) {
    watchit.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/preview/WatchItAgain/' + watchitdata[arr[i]] + '" class="rounded"></a></div></div>')
    i++;
  }

  // Action & Adventures
  
   arr = [];
  while (arr.length < ActionAdventuresdata.length) {
    var r = Math.floor(Math.random() * ActionAdventuresdata.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  i = 0;

  
  while (i < ActionAdventuresdata.length) {
    ActionAdventures.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/preview/ActionAdventures/' + ActionAdventuresdata[arr[i]] + '" class="rounded"></a></div></div>')
    i++;
  }

  // Comedies

  arr = [];
  while (arr.length < Comediesdata.length) {
    var r = Math.floor(Math.random() * Comediesdata.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  i = 0;

  
  while (i < Comediesdata.length) {
    Comedies.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/preview/Comedies/' + Comediesdata[arr[i]] + '" class="rounded"></a></div></div>')
    i++;
  }

    // japan

    arr = [];
    while (arr.length < Japandata.length) {
      var r = Math.floor(Math.random() * Japandata.length);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
  
    i = 0;
  
    
    while (i < Japandata.length) {
      Japan.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/preview/Japan/' + Japandata[arr[i]] + '" class="rounded"></a></div></div>')
      i++;
    }
    
    $(function () {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 120) {
          $("#bar").css("backgroundColor", "black");
        } else if ($(window).scrollTop() > 20){
          $("#bar").css("backgroundColor", "#181818");
        }
        else {
          $("#bar").css("backgroundColor", "transparent");
        }
      });
    });

      $("#video").css("display", "none"); //HIDE THE VIDEO INITIALLY
      $("#main-block").hover(function () 
              {
              $("#thumbnail").css("display", "none");
              $("#video").css("display", "block"); //SHOW THE VIDEO ON HOVER
              $("#main-block").children("#video")[0].play();
              }, 
  
      function () {
          var el = $("#main-block").children("#video")[0];
          el.pause();
          $("#video").css("display", "none");
          $("#thumbnail").css("display", "block");
      });
}

//smooth gradient