// get the modal element
var modal1 = document.getElementById('simple-modal1');
var modal2 = document.getElementById('simple-modal2');
var modal3 = document.getElementById('simple-modal3');



// get open modal button
var modalBtn1 = document.getElementById('modal-btn1');
var modalBtn2 = document.getElementById('modal-btn2');
var modalBtn3 = document.getElementById('modal-btn3');


// get the close btn
var closeBtn1 = document.getElementById('close-btn1');
var closeBtn2 = document.getElementById('close-btn2');
var closeBtn3 = document.getElementById('close-btn3');



// listen for a click to open
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3); 
 

// listen for close
closeBtn1.addEventListener('click', closeModal1); 
closeBtn2.addEventListener('click', closeModal2); 
closeBtn3.addEventListener('click', closeModal3); 






// openModal function
function openModal1(e){

	modal1.style.display = 'block';
}
function openModal2(e){

	modal2.style.display = 'block';
}
function openModal3(e){

	modal3.style.display = 'block';
}

function closeModal1(e){
	modal1.style.display = 'none';
}

function closeModal2(e){
	modal2.style.display = 'none';
}
function closeModal3(e){
	modal3.style.display = 'none';
}


