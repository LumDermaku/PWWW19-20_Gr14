var i = 0;
function countNumbers()
{
    i ++;
    postMessage(i);
    setTimeout("countNumbers()", 500);
}
countNumbers();


