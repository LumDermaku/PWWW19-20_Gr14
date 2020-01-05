function save()
{
    var age = 20////19.9: Përdorimi i variablave lokale dhe globale – të përdoren me kuptim!;
    if (typeof(Storage) !== "undefined") //10.10: Përdorimi i JS operatorëve (të paktën 4 raste)
    {
        sessionStorage.setItem("inp", document.getElementById("fill").value + ""+age)
        document.getElementById('result').innerHTML = sessionStorage.getItem("inp");
    }
}
var myName = "Lum";//19.9: Përdorimi i variablave lokale dhe globale – të përdoren me kuptim!; 19.5: Përdorimi i JS data tipeve (data types) në raste të ndryshme
// 19.7: Krijimi dhe përdorimi i objekteve në JS;19.5: Përdorimi i JS data tipeve (data types) në raste të ndryshme
var specs =
    {
        cpu: "i7", ram: "16gb ddr4", gpu: "Gtx 1650MQ"
    }

/*20.4: Definimi i objekteve në JS duke përdorur funskionet
përdorimi i konstruktorit të objektit) si dhe krijimi i
instancave të objekteve nga ky funksion. Të përdoren të
paktën 3 raste të tilla.  */

let emri, uni, year;
function Info(emri, uni, year)
{
    this.emri = emri;
    this.uni = uni;
    this.year = year;
}


let student1 = new Info("Lum", "UP", 3);
let student2 = new Info("Albian", "UP", 3);
let student3 = new Info("Ideal", "UP", 3);
Info.prototype.surname = "Cocaj"; /* 20.8: Përdorimi i të paktën 2 ‘PROTOTIPEVE’ (konstruktorëve
global) të JS*/

let id, manuf, use;
function Car(id, manuf, use)
{
    this.id = id;
    this.manuf = manuf;
    this.use = use;
}

let car1 = new Car("Mercedes", "Mercedes", 20);
let car2 = new Car("Audi", "BMW", 4);
let car3 = new Car("VW", "VW", 9);
Car.prototype.yearOfProd = 2010;/* 20.8: Përdorimi i të paktën 2 ‘PROTOTIPEVE’ (konstruktorëve
global) të JS*/

let nm, height, width;
function Flower(nm, height, width)
{
    this.nm = nm;
    this.height = height;
    this.width = width;
}

let flower1 = new Flower("Tulip", 30, 5);
let flower2 = new Flower("Rose", 25, 10);
let flower3 = new Flower("Sunflower", 100, 12);

window.addEventListener("Load",save,false) //10.2: Përdorimi i JavaScript për tekst (output), ngjarje (event)



//Application Cache do te funksionoje vetem nese e kemi host website-in online.
//Ne rast se e kemi nderru manifestin, duhet t'i tregojme page-it te behet update.
var appCache = window.applicationCache; //19.4: Përdorimi i JS variablave në raste të ndryshme ; 19.9: Përdorimi i variablave lokale dhe globale – të përdoren me kuptim!
appCache.update();
if (appCache.status === window.applicationCache.UPDATEREADY)
{
    appCache.swapCache();
}

switch (appCache.status)
{
    //19.11: Përdorimi i kushtëzimeve në JS. Varësisht nga rasti, të përdoren të paktën 5 herë kushtëzimet (IF, IF...ELSE,SWITCH, etj) dhe iteracioneve (loops) si (FOR; WHILE,etj).
    case appCache.UNCACHED:'UNCACHED';
        break;
    case appCache.IDLE:'IDLE';
        break;
    case appCache.CHECKING:'CHECKING';
        break;
    case appCache.DOWNLOADING:'DOWNLOADING';
        break;
    case appCache.UPDATEREADY:'UPDATEREADY';
        break;
    case appCache.OBSOLETE:'OBSOLETE';
        break;
    default: 'UKNOWN CACHE STATUS';
        break;
}

//Kjo vetem tregon qe cache i ri do te perdoret per perdorim heren e ardhshme mirepo duhet t'i tregojme faqes qe ta
//beje update chache me cache te ri, kjo mund te behet ne menyre automatike.

// kontrollo nese ka cache te ri ne page load
window.addEventListener('load', function(e)
{
    window.applicationCache.addEventListener('updateready', function(e)
    {
        if (window.applicationCache.status === window.applicationCache.UPDATEREADY) //19.10: Përdorimi i JS operatorëve (të paktën 4 raste)
        {
            // Browseri e ka download cache te ri
            if (confirm('A new version of this site is available. Load it?'))
            {
                window.location.reload();
            }
        }
        else
        {
            // Cache file (manifesti) nuk ka nderru, nuk ben nderrime
        }
    }, false);
}, false);
