function main ()
{
    let month = document.getElementById("monthInput").value
    {
        if (month === "1" || month === "3" || month === "5" || month === "7" || month === "8" || month === "10" || month === "12")
        {
            result.innerHTML = "31 days";
        }
        else if (month === "2")
        {
            result.innerHTML = "28 or 29 days";
        }
        else if (month === "4" || month ==="6" || month === "9" || month === "11")
        {
            result.innerHTML = "30 days";
        }
    }
}
