const calculator=(data) => {
    if(data.op=="+"){
        var ans=Number(data.num1) + Number(data.num2);
    }
    else if(data.op=="-"){
        var ans=Number(data.num1) - Number(data.num2);
    }
    else if(data.op=="*"){
        var ans=Number(data.num1) * Number(data.num2);
    }
    else if(data.op=="/"){
        var ans=Number(data.num1) / Number(data.num2);
    }
    return ans;
}

module.exports ={calculator,};