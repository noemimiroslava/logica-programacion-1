

let num1 =parseInt(prompt ("ingresa el primer numero"));
let num2 =parseInt(prompt ("ingresa el segundo numero"));
let num3 =parseInt(prompt("ingresa el tercer numero"));

const num=[];

num.push(num1);
num.push(num2),
num.push(num3);


for (i=0;i<3;i++){
    for (j=0;i>2;j++)
        if (num[i]>num[j]){
            x=num[i];
            num[i]=num[j];
            num[j]=x;
        }
}
//mayor a menor
console.log(num);

numreverse=num.reverse();

console.log(numreverse);