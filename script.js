var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

// do not write any elements into your HTML file
// loop through the above array to append a div using .append() into the body tag
// the appended div should always have the ".character" class
// display the characters name, class, and vehicle in the div
// Information should be displayed as "Name: Optimus Prime", with the next information on a different line
// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"
// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon
// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png
// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png
// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')
// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white

for(var i = 0; i < chrs.length; i++) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  if(chrs[i].afl == "autobot") {
    div.setAttribute("class", "character autobot");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  } else {
    div.setAttribute("class", "character decepticon ");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }
  var c = document.createElement("div");
  c.innerHTML = "Name: " + chrs[i].name;
  div.appendChild(c);
  
  var h = document.createElement("div");
  h.innerHTML = "Class: " + chrs[i].class.toUpperCase();
  div.appendChild(h);
  
  var v = document.createElement("div");
  v.innerHTML = "Vehicle: " + chrs[i].vehicle;
  if(chrs[i].vehicle == "truck") {
    v.style.color = "blue";
  } else if(chrs[i].vehicle == "tank") {
    v.style.color = "green";
  } else if(chrs[i].vehicle == "car") {
    v.style.color = "gold";
  } else {
    v.style.color = "white";
  }
  div.appendChild(v);
  div.appendChild(img);
  document.body.appendChild(div);
}