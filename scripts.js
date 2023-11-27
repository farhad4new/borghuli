function showLModified() {

let lastModifiedP = document.createElement("p");
let lModified = new Date(document.lastModified);
let lMYear = lModified.getFullYear();
let lMMonth = lModified.getMonth();
let lMDate = lModified.getDate();
let lMHours= lModified.getHours();
let lMMinutes = lModified.getMinutes();
let lMSeconds = lModified.getSeconds();
lMHours = addZero(lMHours);
lMMinutes = addZero(lMMinutes);
lMSeconds = addZero(lMSeconds);

let now = new Date();
let thisYear = now.getFullYear();
let thisMonth = now.getMonth();
let today = now.getDate();
now = now.toLocaleString();

if(lMYear == thisYear && lMMonth == thisMonth && lMDate == today){
lastModifiedP.innerHTML = "<strong> Last Modified: </strong> " + "Today, " + lMHours + ":" + lMMinutes + ":" + lMSeconds;
} else if(lMYear == thisYear && lMMonth == thisMonth && lMDate == today - 1){
lastModifiedP.innerHTML = "<strong> Last Modified: </strong> " + "Yesterday, " + lMHours + ":" + lMMinutes + ":" + lMSeconds;
}
else{
lastModifiedP.innerHTML = "<strong> Last Modified: </strong> " + lModified;
}
document.body.appendChild(lastModifiedP);
} showLModified();


function addZero(i){
if(i<10){
i = "0" + i;
} // add zero in front of numbers < 10
return i;
}