/** Add any JavaScript you need to this file. */
window.onload = function(){
  // To dynamically show the items based on the category

  selectCategory("all");

  var all = document.querySelector(".all");
  if (all != null) {
    all.onclick = function(e){
      selectCategory('all');
      setCTitle("All");
    };
  }

  var cards = document.querySelector(".menu-cards");
  if (cards != null) {
    cards.onclick = function(e){
      selectCategory('cards');
      setCTitle("Cards");
    };
  }


  var books = document.querySelector(".menu-books");
  if (books != null) {
    books.onclick = function(e){
      selectCategory('books');
      setCTitle("Books");
    };
  }

  var posters = document.querySelector(".menu-posters");
  if (posters != null) {
    posters.onclick = function(e){
      selectCategory('posters');
      setCTitle("Posters");
    };
  }

  function setCTitle(category){
    var categoryTitle = document.querySelector('.category-title');
    categoryTitle.textContent = "";
    categoryTitle.appendChild(document.createTextNode(category));
  }

  function selectCategory(c) {
    var x, i;
    x = document.getElementsByClassName("item-card");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      if (x[i].className.includes("show")){
        x[i].className = x[i].className.replace("show", "");
      }
      if (x[i].className.includes(c)) {
        x[i].className += " " +"show";
      }
    }
  }


  // To dynamically show the order number input box

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
        document.querySelector('#order-number-div').style.display = 'block';
        document.getElementById('order-number').setAttribute("required", "");
    } else {
        document.querySelector('#order-number-div').style.display = 'none';
    }
  };

};
