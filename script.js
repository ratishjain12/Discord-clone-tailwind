document.getElementById("hamburger-menu").addEventListener("click", function() {
    document.getElementById("hamburger-menu").classList.toggle("hidden")
    document.getElementById("close").classList.remove("hidden")
    document.getElementById("navbar").classList.toggle("translate-x-full");
  });
  

  document.getElementById("close").addEventListener("click", function() {
    document.getElementById("navbar").classList.toggle("translate-x-full");
    document.getElementById("hamburger-menu").classList.toggle("hidden")
    document.getElementById("close").classList.add("hidden")
  })