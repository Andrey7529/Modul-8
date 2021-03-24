let numUnput = prompt('Введите значение');
  numUnput =+ numUnput;
if(typeof(numUnput) == "number" && !Number.isNaN(numUnput)) {
     if(numUnput % 2 == 0 && numUnput !== 0) {
	alert('Четное число');
     }
     else {
		 if(numUnput === 0) {
	     alert('Это ноль')
	 }
else {
		alert('Нечетное число')
	}
     }
}
else {
	alert('Вы ввели не число.')
}