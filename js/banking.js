document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    
    // get current deposite
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;
    
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositeAmount;

    // clear input 
    depositeInput.value = '';
});


document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmount)
    
    // get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear input 
    withdrawInput.value = '';
});