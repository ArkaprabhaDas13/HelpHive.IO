console.log("This is the new github JS file")

function evenNum()
{
    console.log("even number")
}


function feature()
{
    console.log("Feature!!!!!")
}

function feature2()
{
    console.log("feature2 !!!")
    console.log("Feature 2 add on 1")
}


const sum  =  num1 => num2 => num3 => {
    return num1+num2+num3;
}

const ans1 = sum(1);
const ans2 = ans1(2);
const ans3 = ans2(3);

console.log(ans3);