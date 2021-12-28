
// Follow Links
function facebook(){
alert("Facebook link coming soon");
}

function insta(){
alert("Instagram Link link coming soon");
}

function youtube(){
alert("Youtube  link coming soon");
}

function whatsapp(){
   alert("Number Copied to clipboard.");
   navigator.clipboard.writeText("+918267895427");
}




// Initialization of input fields
for (let index=1; index < 12; index++) {
      var text=document.getElementById("text"+index);
      text.value="";
      }





// To display and hide buttons
function dis(a){
var text=document.getElementById("text"+a);
var remove=document.getElementById("remove"+a);

remove.style.display="block";
text.style.display="block";

var add=document.getElementById("add"+a);
add.style.display="none";


document.getElementById("text"+a).focus();

}
function hide(a){
      var text=document.getElementById("text"+a);
      var remove=document.getElementById("remove"+a);

      remove.style.display="none";
      text.style.display="none";

      text.value="";
      
      var add=document.getElementById("add"+a);
      add.style.display="block";   
}







// for bill
function bill(){
      // Hide menu
      document.getElementById("obox").style.display="none";
      document.getElementById("order").style.display="none";
      document.getElementById("but").style.display="none";
      
      // show bill
      document.getElementById("bill").style.display="block";
      var total=0,quantity=0,Subtotal=0,price=0,item="";


      // Assignment of price and item
      for (let index = 1; index < 12; index++) {
            switch (index) {
                  case 1:price=250;
                        item="CHOLE BHATURE";
                        break;
            
                  case 2:price=250;
                  item="DAL MAKHNI";
                        break;
            
                  case 3:price=200;
                  item="ALOO GOBI";
                        break;
            
                  case 4:price=50;
                  item="ICE CREAM";
                        break;
            
                  case 5:price=70;
                  item="KHEER";
                        break;
            
                  case 6:price=300;
                  item="MATAR PANEER";
                        break;
            
                  case 7:price=250;
                  item="MIX VEG";
                        break;
            
                  case 8:price=40;
                  item="NAN ROTI";
                        break;
            
                  case 9:price=300;
                  item="PAV BHAJI";
                        break;
            
                  case 10:price=30;
                  item="TAVA ROTI";
                        break;
            
                  case 11:price=80;
                  item="SALAD";
                        break;
            
                  default:console.log("Something Went wrong");
                        break;
            }



        quantity=document.getElementById("text"+index).value;
        if(quantity<0){
            quantity=-quantity;
      }
      quantity=Math.floor(quantity);
        if(quantity=="" || quantity==0){
              continue;
        }
        else{
              Subtotal=price*quantity;
              total=total+quantity*price;

              document.getElementById("start").innerHTML+="<tr> <td>"+item +" </td>"+" <td>"+quantity+" </td>"+" <td>"+"Rs. " +price+" </td>"+" <td>"+"Rs. "+Subtotal+" </td>";
            }
            
      } 
    document.getElementById("total").innerHTML="Rs. "+total;
    document.getElementById("orderag").style.display="block";
}


// order again
function orderag(){
  for (let index=1; index < 12; index++) {
            var text=document.getElementById("text"+index);
            text.value="";
            hide(index);
 
      } 
// Show order Menu
 document.getElementById("obox").style.display="block";
 document.getElementById("order").style.display="block";
 document.getElementById("but").style.display="flex";
      

// Hide bill
 document.getElementById("bill").style.display="none"; 
 document.getElementById("total").innerHTML=0;
 document.getElementById("orderag").style.display="none"; 


// Set total to 0
document.getElementById("start").innerHTML="";
}