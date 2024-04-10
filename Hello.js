const main=(operator,num1,num2) => {

if(operator == "+")
{
    const data = add(num1,num2);
    console.log(data)
}
else if(operator == "-")
{
    const data = substract(num1,num2);
    console.log(data)
}
else if(operator == "*")
{
    const data = multiply(num1,num2)
    console.log(data)
}
else if(operator == "/")
{
    const data = divi(num1,num2);
    console.log(data)
}
else
{
    console.log("there is problem")
}

}

const add = (num1,num2) => 
{
    return num1 + num2;
}
const subtract = (num1,num2)=>
{
    return num1 = num2;
}

const multiply = (num1,num2)
{
    return num1 = num2;
}
const divi = (num1,num2) =>
{
    return num1 / num2;
}

main("+",3,4)
main("-", 5,9)
main("*", 6,9)
main("/",8,5)