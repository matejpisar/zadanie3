console.log("Funguje mi to")

//premenne
id="a";
let a=27;
console.log(a);
document.getElementById("a").innerHTML = a;
id="b";
let b="Matej Pisár";
console.log(b);
document.getElementById("b").innerHTML = b;
id="c";
let c=new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear();
console.log(c);
document.getElementById("c").innerHTML = c;
id="d";
let d=1
console.log(d);
document.getElementById("d").innerHTML = d;
id="e";
e=2; 
console.log(e);
document.getElementById("e").innerHTML = e;
console.log("Volám sa "+b+" mám "+a+ " a vypracovávam "+(d+e) +". zadanie"+ (" (dňa: "+c+")"));
document.getElementById("vysledok").innerHTML = "Volám sa "+b+" mám "+a+ " a vypracovávam "+(d+e) +". zadanie"+ (" (dňa: "+c+")") ;

//operatory
id="operatory_sucet";
let cislo1 = 5;
  let cislo2 = 11;
  let sucet = cislo1 + cislo2;
  console.log("Súčet čísel "+cislo1+" a "+cislo2+ " sa rovná "+sucet );
  document.getElementById("operatory_sucet").innerHTML = "Súčet čísel "+cislo1+" a "+cislo2+ " sa rovná "+sucet ;
  
  id="operatory_sucin"
  cislo1 = 5;
  cislo2 = 11;
    let nasobenie = cislo1 * cislo2;;
    console.log("Súčin čísel "+cislo1+" a "+cislo2+ " sa rovná "+nasobenie );
    document.getElementById("operatory_sucin").innerHTML = "Súčin čísel "+cislo1+" a "+cislo2+ " sa rovná "+nasobenie ;

//funkcie
function Na_grady(cislo) {
  let result = cislo / 0.9;
  return result;
}

id="funkcia";
let pravy_uhol=Na_grady(90);
document.getElementById("funkcia").innerHTML = pravy_uhol+" g";
console.log(pravy_uhol+" g");
    
//Objekty
id="objekt";
var clovek = {firstName:'Matej', lastName:'Pisár', age:27, adress: "Závalie 1340/10", town: "Hlohovec", PSC: "920 01"};
document.getElementById("objekt").innerHTML =clovek.firstName + " " + clovek.lastName + " vo veku " + clovek.age + " rokov býva na adrese "+clovek.adress+" v meste "+clovek.town+" ( PSČ"+clovek.PSC+").";    
console.log(clovek.firstName + " " + clovek.lastName + " vo veku " + clovek.age + " rokov býva na adrese "+clovek.adress+" v meste "+clovek.town+" ( PSČ"+clovek.PSC+").");

//if_else_podmienka
id="podmienky";
let mesiac  = new Date().getMonth()+1; 
let cast_roka ;
    if ( mesiac > 6) {
      cast_roka = "Druhý polrok";
    } else {
      cast_roka = "Prvý polrok";
    }
    document.getElementById("podmienky").innerHTML = new Date().getMonth()+1+" mesiac: "+cast_roka;
    console.log(new Date().getMonth()+1,cast_roka);

//if_cyklus
    id="cyklus_for"
    let nazov = "Hello World";
    let dlzka = nazov.length;
    let cyklus = "";
    for (i=1; i < dlzka;) {
      cyklus += nazov +" "+[i] + "<br>";
      i++ 
    }
    console.log(cyklus);
document.getElementById("cyklus_for").innerHTML = cyklus;

//arrays
id="1.pole"
let mapove_sluzby=["WMS", "WMTS", "WFS", "WCS"];
console.log(mapove_sluzby);
document.getElementById("1.pole").innerHTML = mapove_sluzby;
id="2.pole"
let cisla=[17,5,1992,18,12,1969];
console.log(cisla);
document.getElementById("2.pole").innerHTML = cisla;

//array-map
id="array-map"
let num = [1, 4, 9];
let vypocet = num.map(function(num) {
  return Math.sqrt(num)
});
console.log(vypocet);
document.getElementById("array-map").innerHTML = vypocet;
//array-push
id="array-push";
const sluzby = ["WMS", "WMTS", "WFS"];
console.log(sluzby);
sluzby.push("WCS");
console.log(sluzby);
document.getElementById("array-push").innerHTML = sluzby ;

//array-forEach
let sum = 0;
let numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  document.getElementById("array-forEach").innerHTML = sum;
}

console.log(sum);

//array-find
const person = [{firstName:'John', lastName:'Doe', age:27},
              {firstName:'Matej', lastName:'Pisár', age:27},
              {firstName:'Boris', lastName:'Pisár', age:25},
              {firstName:'Janka', lastName:'Heráková', age:18}];

id="array-find";
function vek(osoby) {
  return osoby.age<=25;
  ;
}
console.log("["+"krstné meno: "+person.find(vek).firstName+" , "+"priezvisko: "+person.find(vek).lastName+" , "+"vek: "+person.find(vek).age+"]");
document.getElementById("array-find").innerHTML = "["+"krstné meno: "+person.find(vek).firstName+" , "+"priezvisko: "+person.find(vek).lastName+" , "+"vek: "+person.find(vek).age+"]";

//array-find-index
id="array-find";
function vek(osoby) {
  return osoby.age<=25;
  ;
}
console.log(person.findIndex(vek));
document.getElementById("array-find-index").innerHTML = person.findIndex(vek);

//array-join
let elementy = ["Oheň", "Vzduch", "Voda", "Zem"];
id="array-join";
spojenie=elementy.join("-");
console.log(spojenie);
document.getElementById("array-join").innerHTML = spojenie;
