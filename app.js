function ticketQuantityHandle(isIncrease,ticketType){
    let economyCount = document.getElementById(ticketType+"-count");
    let economyCountNum = parseInt(economyCount.value);
    if(isIncrease == true){
        economyCount.value = economyCountNum + 1;
        calculateTotal();
    }
    else if(isIncrease == false && economyCountNum > 0){
        economyCount.value = economyCountNum - 1;
        calculateTotal();
    }
}

function calculateTotal(){
    const economyInput = document.getElementById("economy-count");
    const economyCount = parseInt(economyInput.value);

    const firstClassInput = document.getElementById("first-class-count");
    const firstClassCount = parseInt(firstClassInput.value);
    
    const subTotal = economyCount * 100 + firstClassCount * 150;
    document.getElementById("subtotal").innerText = subTotal;

    const vat = (economyCount * 100 + firstClassCount * 150)*0.10;
    document.getElementById("vat").innerText = vat;

    const grandTotal = (economyCount * 100 + firstClassCount * 150)+((economyCount * 100 + firstClassCount * 150)*0.10);
    document.getElementById("grand-total").innerText = grandTotal;
    document.getElementById("price-alert").innerText = grandTotal;
}
document.getElementById("alright-button").addEventListener("click",function(){
    location.reload();
    return false;
})