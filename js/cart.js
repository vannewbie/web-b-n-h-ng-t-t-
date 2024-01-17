var gia1 = 2116;
var gia2 = 2880;
var gia3 = 1700;

$("#input1").change( function() {
    alert(sds);
    updateTotal();

});

function updateTotal() {
    var gia1 = 2.116;
    var gia2 = 2.880;
    var gia3 = 1.700;
    var QTY1 =  document.getElementById("input1").value;
    
    var total =0;
    var QTY1 =  document.getElementById("input1").value;
    var QTY2 =  document.getElementById("input2").value;
    var QTY3 =  document.getElementById("input3").value;

    total= gia1*parseInt(QTY1)+gia2*parseInt(QTY2)+gia3*parseInt(QTY3)
    var totalString = total.toString(). 
            replace(/\B(?=(\d{3})+(?!\d))/g,".");
            
    document.getElementById('txtTotal').innerHTML = totalString;
}


function deleteItem(itemId) {
    var row = document.getElementById("input" + itemId).parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateTotal();
}

// onClick
const btnOrder = document.querySelector('.btnOrder');
function DatHang() {
  alert('Đặt hàng thành công!');
}
btnOrder.addEventListener('click', DatHang);