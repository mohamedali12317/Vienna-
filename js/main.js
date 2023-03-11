document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  checkAge();
});

  function checkAge() {
   var day = document.getElementById("day").value;
   var month = document.getElementById("month").value;
   var year = document.getElementById("year").value;
   var today = new Date();
   var age = today.getFullYear() - year;
   if (today.getMonth() + 1 < month || (today.getMonth() + 1 == month && today.getDate() < day)) {
     age--;
   }
   if (age < 18) {
     alert("Sorry, you're not the age required to enter");
    } else {
     window.location.href = "home.html";
     }
     }

    //  document.querySelector("form").addEventListener("submit", function(e) {
    //  e.preventDefault();
    //  checkAge();
    //  });


//  اخفى الديف بتاع الفوتر

// function hideCookiesDiv() {
//   document.querySelector('.cookies').style.display = 'none';
// }

function hideCookiesDiv(el) {
  el.parentElement.parentElement.style.display = 'none';
}

function hideCookiesDiv() {
  var cookiesDiv = document.querySelector('.cookies');
  cookiesDiv.parentNode.removeChild(cookiesDiv);
}



// -------------------

