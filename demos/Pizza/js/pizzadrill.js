function getReceipt() {
    var text1 = "";
    var text2 = "";
    var runningTotal = 0;   //initiate runningTotal and set value to 0


    // begin totalling items, and concatenating text1 and text2
    var temp = getSize(runningTotal, text1, text2);        // create an array variable temp which will be returned runningTotal and text1
    temp = getMeat(temp.runningTotal, temp.text1, temp.text2);  // pass temp values
    temp = getVeggie(temp.runningTotal,temp.text1, temp.text2); // pass temp values
    temp = getCheese(temp.runningTotal, temp.text1, temp.text2);// pass temp values
    temp = getCrust(temp.runningTotal, temp.text1, temp.text2); // pass temp values
    temp = getSauce(temp.runningTotal, temp.text1, temp.text2); //pass temp values
    runningTotal = temp.runningTotal;   // store temp.runningTotal to runningTotal
    text1 = temp.text1;                 // store array of items in text1
    text2 = temp.text2;                 // store array of subtotals in text2
    
    document.getElementById("cart") .style.opacity = 1;
    document.getElementById("showText1").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}

function getSize(runningTotal, text1, text2) {
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }

    if (selectedSize == "Personal Pizza"){
        sizeTotal = 6;
    } else if (selectedSize == "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize == "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize == "Extra Large Pizza") {
        sizeTotal = 16;
    }

    text2 = text2 + "$" + sizeTotal + ".00<br>";
    runningTotal = (runningTotal + sizeTotal);
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal+".00");
    return( {runningTotal: runningTotal, text1: text1, text2: text2} );
}

function getMeat(runningTotal, text1, text2) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");

    for (var i = 0; i < meatArray.length; i++) {
        if(meatArray[i].checked){
            selectedMeat.push(meatArray[i].value);
            console.log("Selected meat item: ("+meatArray[i].value+")");
            text1 = text1+meatArray[i].value+"<br>";
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }

    for (i = 0; i < selectedMeat.length; i++) {
        if(meatCount <= 1) {
            text2 = text2 + "$" + 0 + ".00<br>";
            meatCount = meatCount - 1;
        } else if (meatCount >= 2) {
            text2 = text2 + "$" + 1 + ".00<br>"; 
            meatCount = meatCount - 1;
        }
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: "+meatCount);
    console.log(meatCount+" meat - 1 free meat = " + "$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    return {runningTotal: runningTotal, text1: text1, text2: text2}
}

function getVeggie(runningTotal, text1, text2) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("vegetables");

    for (var i = 0; i < veggieArray.length; i++) {
        if(veggieArray[i].checked) {
            selectedVeggie.push(veggieArray[i].value);
            console.log("Selected veggie item: ("+veggieArray[i].value+")");
            text1 = text1+veggieArray[i].value+"<br>";
        }
    }

    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) { 
        veggieTotal = (veggieCount -1);
    } else {
        veggieTotal = 0;
    }

    for (i = 0; i < selectedVeggie.length; i++) {
        if(veggieCount <= 1) {
            text2 = text2 + "$" + 0 + ".00<br>";
            veggieCount = veggieCount - 1;
        } else if (veggieCount >= 2) {
            text2 = text2 + "$" + 1 + ".00<br>"; 
            veggieCount = veggieCount - 1;
        }
    }

    runningTotal = (runningTotal + veggieTotal);
    console.log("total selected veggie items: "+veggieCount);
    console.log(veggieCount+" veggie - 1 free veggie = " + "$" + veggieTotal + ".00");
    console.log("vegge text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    return {runningTotal: runningTotal, text1:text1, text2: text2};
}

function getCheese(runningTotal, text1, text2) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");

    for (var i = 0; i < cheeseArray.length; i++) {
        if (cheeseArray[i].checked) {
            var selectedCheese = cheeseArray[i].value;
            text1 = text1+selectedCheese+"<br>";
        }
    }

    if (selectedCheese == "Extra Cheese"){
        cheeseTotal = 3;
        text2 = text2 + "$" + 3 + ".00<br>";
    } else {
        cheeseTotal = 0;
        text2 = text2 + "$" + 0 + ".00<br>";
    }

    runningTotal = (runningTotal + cheeseTotal);
    return ({runningTotal: runningTotal, text1: text1, text2:text2});
}

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			selectedSauce = sauceArray[i].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + "$" + 0 + ".00<br>";
	return({runningTotal: runningTotal, text1: text1, text2: text2});
}

function getCrust(runningTotal, text1, text2) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");

    for (var i = 0; i < crustArray.length; i++) { 
        if(crustArray[i].checked) {
            var selectedCrust = crustArray[i].value;
            text1 = text1+selectedCrust+"<br>";
        }
    }

    if (selectedCrust == "Cheese Stuffed Crust") {
        crustTotal = 3;
        text2 = text2 + "$" + 3 + ".00<br>";
    } else {
        crustTotal = 0;
        text2 = text2 + "$" + 0 + ".00<br>";
    }

    runningTotal = (runningTotal + crustTotal);

    return ({runningTotal: runningTotal, text1: text1, text2: text2});
}

function clearTotal() {
    document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
}
