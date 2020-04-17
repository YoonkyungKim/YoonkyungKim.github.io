/** Add any JavaScript you need to this file. */
window.onload = function(){

  // function filterItems_(category){
  //   if (c == "all") {
  //     c = "";
  //   }
  //   var items = document.getElementsByClassName(category);
  //   for (var i=0; i<items.length; i++){
  //       items[i].style.display = "block";
  //   }
  // }

  filterSelection("all");

  var all = document.querySelector(".all");
  if (all != null) {
    all.onclick = function(e){
      filterSelection('all');
      setCTitle("All");
    };
  }

  var cards = document.querySelector(".menu-cards");
  if (cards != null) {
    cards.onclick = function(e){
      filterSelection('cards');
      setCTitle("Cards");
    };
  }


  var books = document.querySelector(".menu-books");
  if (books != null) {
    books.onclick = function(e){
      filterSelection('books');
      setCTitle("Books");
    };
  }

  var posters = document.querySelector(".menu-posters");
  if (posters != null) {
    posters.addEventListener("click", function(e){
      filterSelection('posters');
      setCTitle("Posters");
    });
  }

  function setCTitle(category){
    var categoryTitle = document.querySelector('.category-title');
    categoryTitle.textContent = "";
    categoryTitle.appendChild(document.createTextNode(category));
  }

  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("item-card");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) {
        addClass(x[i], "show");
      }
    }
  }

  function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // posters.onclick = function(e){
  //   var categoryTitle = document.getElementsByClassName('category-title');
  //   // categoryTitle.textContent = "";
  //   categoryTitle.appendChild(document.createTextNode("Posters"));
  //
  //   // document.querySelector('.posters').style.display = 'none';
  // }
  var question = document.getElementById("question");
  if (question != null) {
    question.onclick = function(e){
      checkOrderProb();
    };
  }

  var comment = document.getElementById("comment");
  if (comment != null) {
    comment.onclick = function(e){
      checkOrderProb();
    };
  }

  var orderProblem = document.getElementById("order-problem");
  if (orderProblem != null){
    orderProblem.onclick = function(e){
      checkOrderProb();
    };
  }


  function checkOrderProb() {
    if (document.getElementById('order-problem').checked) {
        document.querySelector('#order-number-div').style.visibility = 'visible';
    } else {
        document.querySelector('#order-number-div').style.visibility = 'hidden';
    }
  };

};


  // function showImgs(){
//     // array
    // var imgs = document.getElementsByClassName('content-container');
    // for (var i = 0; i<imgs.length; i++){
      // imgs[i].addEventListener('click', function(){
        // this.style.display = 'none';
      // });
    // }
//     // img.style.visibility = (visible ? "visible" : "hidden");
  // }
//
//
// var menu = document.getElementsByClassName("menu-li");
// for (var i = 0; i<menu.length; i++){
//   menu[i].addEventListener('click', function(){
//
//     // var imgs = document.getElementsByClassName("item-img");
//     // for (var i = 0; i<imgs.length; i++){
//     //   imgs[i].addEventListener('click', function(){
//     //     this.style.display = 'none';
//     //   })
//     // }
//   })
// }



//
//   // countryCodeToFlagImg: function(countryCode) {
//   //       var flag = document.createElement("img");
//   //       flag.src = "flags/" + countryCode.toLowerCase() + ".png";
//   //       return flag;
//   //     },
//   //
  // function changeImage(){
  //       var selectBox = document.getElementById("selectbox");
  //       var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  //       document.getElementById("img").src = selectedValue + ".png";
  // }
