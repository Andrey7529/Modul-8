let x = true;
if(typeof(x) == "number") {
	
		console.log(x + ' - число');
}
else if(typeof(x) == "string") {
	
		console.log(x + ' - строка');
}
else if(typeof(x) == "boolean") {
	
		console.log(x + ' - логический тип');
}
else if(typeof(x) !== "boolean","number", "string" ) {
	
		console.log('Тип не определен');
}
    