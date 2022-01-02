let timeout;
let id = null;
window.addEventListener('load', 
function myFunction() {
    timeout = setTimeout(moveModal, 500);
  }, false);


function moveModal() {
     let popup = document.getElementById('homepage_popup');
     let pos = 120;
     let ypos = 100;
     id = setInterval(frame, 10);
     function frame() {
       if (pos == 50) {
         clearInterval(id);
       } else {
         pos--;
         popup.style.top = pos + 'vh';
        popup.style.visibility = "visible";
       }
     }
}


function getFacts() {
    let popup_ele = document.getElementById('popupbutton');
    if(popup_ele.classList.contains("disabled")){
        return null;
    }
    else if(popup_ele.classList.contains("enabled")){
        fetch("https://cat-fact.herokuapp.com/facts")
        .then(response => response.json())
        .then(function(data) {
          console.log(data[1].text);
    
          data.forEach(element => {
              console.log(element.text);
              let text= element.text;
              let list = document.getElementById('popup_header');
              list.insertAdjacentHTML('afterend', `<p>${text}</p>`)
          });
    
        })
        .catch(function(error) {
          // If there is any error you will catch them here
          console.log(error);
        });
        
    }
    popup_ele.classList.add("disabled");
    element.classList.remove("enabled");
  }
  
  function closePopup(){
    let popup = document.getElementById('homepage_popup');
    let pos = 50;
    let ypos = 100;
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 200) {
        clearInterval(id);
      } else {
        pos++;
        popup.style.top = pos + 'vh';
     
      }
    }
  }