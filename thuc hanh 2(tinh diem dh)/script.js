function main()
{
    let mathScore = parseFloat(document.getElementById("math").value);
    let literatureScore = parseFloat(document.getElementById("literature").value);
    let englishScore = parseFloat(document.getElementById("english").value);
    let area = document.getElementById("region").value;
    let areaBonus = 
    {
        "KV1": 0.75,
        "KV2": 0.25,
        "KV3": 0

    }
    let totalScore = mathScore + literatureScore + englishScore + areaBonus[area];
    result.innerHTML = "Điểm tổng" + totalScore;

}

