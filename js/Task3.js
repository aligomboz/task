var textTitle = document.getElementById('textTitle'),
    inpText = document.getElementById('inpText'),
    inpSize = document.getElementById('inpSize'),
    inpColor = document.getElementById('inpColor'),
    btnUpdate = document.getElementById('btnUpdate');

btnUpdate.addEventListener('click', refrsh);

function refrsh() {
    if (inpText.value == "") {
        alert('يجب ادخال قيمة ');
    }
    textTitle.innerHTML = inpText.value;
    textTitle.style.fontSize = inpSize.value + 'px';
    textTitle.style.color = inpColor.value;
}