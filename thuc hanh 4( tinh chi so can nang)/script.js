function main ()
{
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let BMI = weight / Math.pow(height, 2)

    {
        if (BMI < 16)
        {
            resultBMI.innerHTML = "Chỉ số BMI của bạn là" + BMI
            finalResult.innerHTML = "Gầy cấp độ III"
        }
        else if (BMI >= 16 || BMI < 17)
        {
            resultBMI.innerHTML = "Chỉ số BMI của bạn là" + BMI
            finalResult.innerHTML = "Gầy cấp độ II"
        }
        else if (BMI >= 17 || BMI < 18.5)
        {
            resultBMI.innerHTML = "Chỉ số BMI của bạn là" + BMI
            finalResult.innerHTML = "Gầy cấp độ I"
        }
        else if (BMI >= 18.5 || BMi < 25)
        {
            resultBMI.innerHTML = "Chỉ số BMI của bạn là" + BMI
            finalResult.innerHTML = "Bình thường"
        }
        else if (BMI >= 25 || BMI < 30)
        {
            resultBMI.innerHTML = "Chỉ số BMI của bạn là" + BMI
            finalResult.innerHTML = "Thừa cân"
        }
        else if (BMi >= 30 || BMI < 35)
        {
            resultBMI.innerHTML = "Chỉ số BMI của bạn là" + BMI
            finalResult.innerHTML = "Béo phì cấp độ I"
        }
        else if (BMi >= 35 || BMi < 40)
        {
            resultBMI.innerHTML = "Chỉ số BMI của bạn là" + BMI
            finalResult.innerHTML = "Béo phì cấp độ II"
        }
        else 
        {
            resultBMI.innerHTML = "Chỉ số BMI của bạn là" + BMI
            finalResult.innerHTML = "Béo phì cấp độ III"
        }

    }


}