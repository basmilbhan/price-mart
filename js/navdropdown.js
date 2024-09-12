function dropdown(value) {
  let products = document.getElementById("btn-products");
  let users = document.getElementById("btn-users");
  let menuProduct = document.getElementById("products-sub");
  let menuUser = document.getElementById("users-sub");

  if (value == "product") {
    if (products.innerHTML == "+") {
      products.innerHTML = "-";
      menuProduct.setAttribute("class", "active");
    } else {
      products.innerHTML = "+";
      menuProduct.removeAttribute("class", "active");
    }
  }

  if (value == "user") {
    if (users.innerHTML == "+") {
      users.innerHTML = "-";
      menuUser.setAttribute("class", "active");
    } else {
      users.innerHTML = "+";
      menuUser.removeAttribute("class", "active");
    }
  }
}

function hideShowNav() {
  let button = document.getElementById("nav-button");
  let main = document.getElementById("main");
  let sidebar = document.getElementById("sidebar");

  if (main.className == "side-bar-show") {
    main.removeAttribute("class");
    sidebar.style.display = "block";
  } else {
    if (sidebar.style.display == "") {
      sidebar.style.display = "block";
    } else {
      main.setAttribute("class", "side-bar-show");
      sidebar.style.display = "none";
    }
  }
}
