/* adding loop and other code to build out table based on data.js inputs*/

/* I combined some of the assignment requirements into one loop 
   to make it easier for me to write and keep track of. I am not sure
   if this is what was intended with the assignment, but it is what
   made sense to me.
*/


outputCartRow();

document.write('<tr class="totals">');
document.write('<td colspan="4">' + "Subtotal" + "</td>");
document.write("<td> $" + allSubTotal.toFixed(2) + "</td>");
document.write("</tr>");

document.write('<tr class="totals">');
document.write('<td colspan="4">' + "Tax" + "</td>");
document.write("<td> $" + allTax() + "</td>");
document.write("</tr>");

document.write('<tr class="totals">');
document.write('<td colspan="4">' + "Shipping" + "</td>");
document.write("<td> $" + calcShipping() + "</td>");
document.write("</tr>");

document.write('<tr class="totals focus">');
document.write('<td colspan="4">' + "Grand Total" + "</td>");
document.write("<td> $" + grandTotal.toFixed(2) + "</td>");
document.write("</tr>");
