

// function keks (){
//   document.getElementById('keks').innerHTML = "добро пожаловать";
// }


// function text (){
//   document.getElementById('text').innerHTML = "красавчик нажал";
// }

// function turnOff() {
//   document.getElementById('myImage').src='img/pops2.png';
// }
// function turnOn() {
//   document.getElementById('myImage').src="img/pops1.png";
// }

// function newContent() {
//   alert("load new content");
//   document.open();
//   document.write("<h1>Document write (новый)</h1><p>Новый контент</p>");
//   document.close();
// }

function showAlert(){
  var myInput = document.getElementById('mu_input_name');
  console.log('myInput', myInput);
  var inputValue = myInput.value;
  console.log('inputValue', inputValue);
  alert(inputValue);
}