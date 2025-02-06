console.log("This is the new github JS file")

function evenNum()
{
    console.log("even number")
}


function feature()
{
    console.log("Feature!!!!!")
}

function double()
{
    const num = 100;

    return function(){
        console.log(num*2);
    }
}

const ans = double();
ans();