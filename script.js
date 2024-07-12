const submit=document.querySelector('#addExpense');
const list=document.querySelector('#details');
submit.addEventListener('click',tableEntry);
function tableEntry(event){
    event.preventDefault();
    const desc=document.getElementById('description').value;
    const category=document.getElementById('category').value;
    const amt=document.getElementById('amount').value;
    if(document &&desc && category && !isNaN(amt) && amt!=='' ){
    const newRow=document.createElement('tr');
    newRow.innerHTML=`<td>${desc} </td> <td>${category}</td> <td> ${amt}</td>`;
    list.appendChild(newRow);
    }
    else{
        alert('Please fill out all fields with valid data');
    }
    document.getElementById('description').value='';
    document.getElementById('category').value='';
    document.getElementById('amount').value='';
}
