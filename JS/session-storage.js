function save()
{
    if (typeof(Storage) !== "undefined")
    {
        sessionStorage.setItem("inp", document.getElementById("fill").value)
        document.getElementById('result').innerHTML = sessionStorage.getItem("inp");
    }
}
