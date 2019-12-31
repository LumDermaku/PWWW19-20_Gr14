function slideNext()
{
    document.img1.src = images[4]; document.getElementById("p_1").innerHTML = desc[2]; document.getElementById("h2_1").innerHTML = headings[2];
    document.img2.src = images[5]; document.getElementById("p_2").innerHTML = desc[3];  document.getElementById("h2_2").innerHTML = headings[3];
    document.img3.src = images[6]; document.getElementById("p_3").innerHTML = desc[3]; document.getElementById("h2_3").innerHTML = headings[3];
    document.img4.src = images[7]; document.getElementById("p_4").innerHTML = desc[3]; document.getElementById("h2_4").innerHTML = headings[3];
}
function slidePrev()
{
    document.img1.src = images[0]; document.getElementById("p_1").innerHTML = desc[0]; document.getElementById("h2_1").innerHTML = headings[0];
    document.img2.src = images[1]; document.getElementById("p_2").innerHTML = desc[1];  document.getElementById("h2_2").innerHTML = headings[1];
    document.img3.src = images[2]; document.getElementById("p_3").innerHTML = desc[1]; document.getElementById("h2_3").innerHTML = headings[1];
    document.img4.src = images[3]; document.getElementById("p_4").innerHTML = desc[1]; document.getElementById("h2_4").innerHTML = headings[1];
}

function slide(a)
{

    if (a===1 )
    {
        slideNext()
    }
    else if (a===0)
    {
        slidePrev()
    }
}
