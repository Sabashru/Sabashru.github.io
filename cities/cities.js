

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  let page = document.querySelector(".page");
  document.getElementById("myDropdown").classList.toggle("show");
  page.classList.toggle('hidden')
  window.onclick = function(event) {
 
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
     
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        document.getElementById("myInput").value = "";
        
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          page.classList.toggle('hidden')
          
          
        }
      }
    }
  } 
}



function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");

  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1  ) {
      a[i].style.display = "";
     
    } else  {
      a[i].style.display = "none";
      
    }
  }
} 







