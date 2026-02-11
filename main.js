

let num1 =parseInt(prompt ("ingresa el primer numero"));
let num2 =parseInt(prompt ("ingresa el segundo numero"));
let num3 =parseInt(prompt("ingresa el tercer numero"));

const num=[];

num.push(num1);
num.push(num2),
num.push(num3);


for (i=0;i<3;i++){
    for (j=0;j<2;j++)
        if (num[j]>num[j+1]){
            x=num[j];
            num[j]=num[j+1];
            num[j]=x;
        }
}
//mayor a menor
console.log(num);

numreverse=num.reverse();
//menor a mayor
console.log(numreverse);