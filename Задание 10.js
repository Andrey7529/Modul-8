let n=prompt("Введите число");
n=parseInt(n);
if  (n > 1000){
  console.log("Недопустимое значение");
}
else if ((n%2==0)&&(n!=2))
console.log("Составное число");
else if (n==2)
console.log("Простое число");
else{
k=Math.round(Math.sqrt(n));
flag = false;

for(i=2; i<k+1; i++)
if(n%i==0)
{
console.log("Составное число");
flag = true;
break;
}

if (flag == false)
console.log("Простое число");
}
