function checkPrice() {
    let fruitName = document.getElementById("fruitName").value;
    let result = document.getElementById("result");
    let priceList = {
        "Ổi": 20000,
        "Dưa Hấu": 20000,
        "Táo": 30000,
        "Xoài": 30000,
        "Cam": 40000,
        "Chôm Chôm": 40000,
        "Măng Cụt": 50000
    };
    if (priceList[fruitName]) {
        result.innerHTML = fruitName + ": " + priceList[fruitName] + " VNĐ/kg";
    } else {
        result.innerHTML = "Không tìm thấy loại hoa quả này";
    }
}