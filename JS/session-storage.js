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
var specs = {} // 19.7: Krijimi dhe përdorimi i objekteve në JS;19.5: Përdorimi i JS data tipeve (data types) në raste të ndryshme
window.addEventListener("Load",save,false) //10.2: Përdorimi i JavaScript për tekst (output), ngjarje (event)


//Ne rast se e kemi nderru manifestin, duhet t'i tregojme page-it te behet update.
var appCache = window.applicationCache; //19.4: Përdorimi i JS variablave në raste të ndryshme ; 19.9: Përdorimi i variablave lokale dhe globale – të përdoren me kuptim!

switch (appCache.status)
{
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

appCache.update();

if (appCache.status === window.applicationCache.UPDATEREADY)
{
    appCache.swapCache();
}

//Kjo vetem tregon qe cache i ri do te perdoret per perdorim heren e ardhshme mirepo duhet t'i tregojme faqes qe ta
//beje update chache me cache te ri, kjo mund te behet ne menyre automatike.

// kontrollo nese ka cache te ri ne page load
window.addEventListener('load', function(e) {

    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status === window.applicationCache.UPDATEREADY) //19.10: Përdorimi i JS operatorëve (të paktën 4 raste)
        {
            // Browseri e ka download cache te ri
            if (confirm('A new version of this site is available. Load it?')) {
                window.location.reload();
            }
        } else {
            // Cache file (manifesti) nuk ka nderru, nuk ben nderrime
        }
    }, false);

}, false);
