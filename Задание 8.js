let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

console.log(myMap.keys());
console.log(myMap.values());

for (let name of myMap.keys()){
  console.log('Ключ ', name)
}

for (let name of myMap.values()){
  console.log('Значение ', name)
}