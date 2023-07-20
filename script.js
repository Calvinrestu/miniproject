//konstanta untuk mengkalkulasi
const btn = document.getElementById('calculate')

//agar ketika mengklik ada value yang keluar
btn.addEventListener('click', function(){
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

//validasi jika height atau weight tidak diisi
  if(height =='' || weight == ''){
    alert('Silahkan mengisi dengan data yang valid!');
    return;
  }

  // Dari centimeter diubah ke meter
  height = height / 100

  // rumus kalkulasi
  let BMI =(weight / (height * height));

  // pembulatan
  BMI = BMI.toFixed(2);

document.querySelector('#result').innerHTML = BMI;

let status = '';
if(BMI <18.5){
  status = "Kekurangan Berat Badan";
}

if (BMI >= 18.5 && BMI <25){
  status = "Normal";
}

if (BMI >= 25 && BMI <30){
  status = "Kelebihan berat badan";
}

if (BMI >= 30){
  status = "Obesitas";
}

//document.querySelector('.comment').innerHTML = 'Comment: You are <span id="comment">${status}</span>'

updateValue(BMI, status);

});