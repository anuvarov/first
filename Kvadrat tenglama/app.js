function calculateF() {


    const aVal = document.getElementById('a');
    const bVal = document.getElementById('b');
    const cVal = document.getElementById('c');
    const result = document.getElementById('result');
    const resultx = document.getElementById('resultx');
    const resulty = document.getElementById('resulty');
    
    
    const a = parseFloat(aVal.value);
    const b = parseFloat(bVal.value);
    const c = parseFloat(cVal.value);
    
    let det = b*b - 4*a*c;
    
    let x1 = ((-b-(Math.sqrt(b*b - 4*a*c)))/(2*a))
    let y1 = ((-b+(Math.sqrt(b*b - 4*a*c)))/(2*a))
    
    result.textContent = `Determinanti: ${det}`
    
    resultx.textContent = `X1: ${x1}`
    resulty.textContent = `X2: ${y1}`
    
    
    }
    
    var d = 625
    
    console.log(Math.sqrt(d));
    