// typewriter effect for the h3 tag
let i=0,h3Text;
let j=0,h4Text;

h3Text = " Books and E-TextBooks"
h4Text = "Explore Our Math TextBooks"

function typingH3(){
  if(i<h3Text.length){
    document.getElementById("h3Text").innerHTML += h3Text.charAt(i);
    i++;
    setTimeout(typingH3,50);
  }
}

function typingH4(){
  if(j<h4Text.length){
    document.getElementById("h4Text").innerHTML += h4Text.charAt(j);
    j++;
    setTimeout(typingH4,50);
  }
}

typingH3();
typingH4();