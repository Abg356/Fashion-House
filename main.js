console.log('Hello World!');

// This is a alert line

/* alert is for welcoming
someone */
alert("WELCOME TO OUR COMMUNITY");

function savedata(){
  
  let email,phone,psw,date;
  
  email = document.getElementById("email").value;
  
  phone = document.getElementById("phone").value;
  
  psw = document.getElementById("psw").value;
  
  date = document.getElementById("date").value;
  
  localStorage.setItem("email",email)
  
  localStorage.setItem("phone",phone)
  
  localStorage.setItem("psw",psw)
  
  localStorage.setItem("date",date)
 
}

  
