let Duplicates = (arr) => arr.length > new Set(arr).size;
console.log(Duplicates([1, 2, 3]));
console.log(Duplicates([1, 2, 3, 1]));