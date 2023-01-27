let button=document.getElementById('button');
let input=document.getElementById('input');
function addElement(){
   let newDiv=document.createElement('div');
   newDiv.innerHTML=input.value;
   let conteiner=document.querySelectorAll('#conteiner');
   conteiner[0].append(newDiv);
   
};

button.addEventListener('click',addElement);

