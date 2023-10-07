function pluralizer() {
    // n -> count of noun
    let n=document.getElementById("num").value;
    n=parseInt(n);
    // noun -> singular noun
    noun=document.getElementById("noun").value;
  
    if (n === 1) {
      console.log(n, noun);
    } else if (n === 0 || n > 1) {
      if (noun.slice(-2) === "fe") {
        noun = noun.slice(0, -2) + "ves";
      } else if (["ay", "oy", "ey", "uy"].includes(noun.slice(-2))) {
        noun += "s";
      } else if (noun.slice(-1) === "y") {
        noun = noun.slice(0, -1) + "ies";
      } else if (["ch", "sh"].includes(noun.slice(-2))) {
        noun += "es";
      } else if (noun.slice(-2) === "us") {
        noun = noun.slice(0, -2) + "i";
      } else {
        noun += "s";
      }
  
      document.getElementById("output").value=(n + " " + noun)
    }
  }  