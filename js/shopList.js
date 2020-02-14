
//var output = document.getElementById('output');
var itemPrice = [["apple","banana","mango","papaya","grapes","pomegranate"],[50,80,75,90,120,80]];
var arr = [];
//var added = document.getElementById('item').innerHTML;
var rowNumber = 0;
var total = [];
var grandTotal = 0;

function add(){
	var itemName = document.getElementById('item-name').value;
	var itemQuantity = document.getElementById('item-quantity').value;
	//console.log(itemName);
	//console.log(itemQuantity);
	itemName = itemName.toUpperCase();
	//console.log(itemName);
	for(var x in itemPrice[0]){
		var itemNameCompare = itemPrice[0][x].toUpperCase();
		//console.log(itemNameCompare);
		if(itemName == itemNameCompare){
			var rate = itemPrice[1][x];
			//let rate = itemPrice[1][x] didinot work, why i wonder?
			break;
		}
	}
	arr[rowNumber] = [itemName, itemQuantity];
	rowNumber++;
	var table = document.getElementById('buyTable');
	var row = table.insertRow(rowNumber);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = itemName;
	cell2.innerHTML = itemQuantity;
	cell3.innerHTML = rate;
	var totalPrice = itemQuantity * rate;
	cell4.innerHTML = totalPrice;
	//console.log(totalPrice);
	//document.getElementById('table-item-name').innerHTML += added;
	//document.getElementById('table-item-quantity').innerHTML += itemQuantity;
	total[rowNumber-1] = totalPrice;
	//console.log(total);
}
function cancel(){
	document.getElementById('adding-list').style.display = "none";
	for(var y in total){
		//console.log(total[y]);
		grandTotal += total[y];
	}
	var table = document.getElementById('buyTable');
	var row = table.insertRow(rowNumber+1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = 'GRAND';
	cell2.innerHTML = 'TOTAL';
	cell3.innerHTML = ':';
	cell4.innerHTML = grandTotal;
	//direct insertCell (1) garda means 0 skip garda milena//??
}
//var x = document.getElementById('item').value;
//output.innerHTML
