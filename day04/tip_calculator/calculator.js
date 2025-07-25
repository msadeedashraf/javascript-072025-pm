function calculateTip()
{
    //alert("Hello from calculate")

     let myBillAmount = document.getElementById('bill').value;
     //console.log(myBillAmount);
     let myTipAmount = document.getElementById('tip').value;
    //console.log(myTipAmount);
    let myTotalAmount = myBillAmount * (1+myTipAmount /100);
    //console.log(myTotalAmount);
    document.getElementById('total').innerHTML = myTotalAmount.toFixed(2);

}