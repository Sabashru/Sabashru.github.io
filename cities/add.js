
  function closeNav() {
    toggleMenu();
  } 
 



const btnMenu = document.querySelector(".openbtn");
const menu = document.querySelector(".sidebar");
const toggleMenu =  function() {
    menu.classList.toggle("open");
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("open");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});




  document.getElementById("copy").onclick = function() {
    var text = document.getElementById("content").textContent;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
        document.getElementById("copy").textContent = "скопированно"
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}