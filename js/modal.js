// get the modal element
var modal1 = document.getElementById('simple-modal1');
var modal2 = document.getElementById('simple-modal2');


// get open modal button
var modalBtn1 = document.getElementById('modal-btn1');
var modalBtn2 = document.getElementById('modal-btn2');

// get the close btn
var closeBtn1 = document.getElementById('close-btn1');
var closeBtn2 = document.getElementById('close-btn2');


// listen for a click to open
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2); 

// listen for close
closeBtn1.addEventListener('click', closeModal1); 
closeBtn2.addEventListener('click', closeModal2); 





// openModal function
function openModal1(e){

	modal1.style.display = 'block';
}
function openModal2(e){

	modal2.style.display = 'block';
}

function closeModal1(e){
	modal1.style.display = 'none';
}

function closeModal2(e){
	modal2.style.display = 'none';
}


