function tinhTien() {
  // INPUT
  var hoTen = document.getElementById("hoTen").value * 1;
  var soDien = document.getElementById("soDien").value * 1;
  // XỮ LÝ
  var kW50Dau = 500;
  var kW50Ke = 650;
  var kW100Ke = 850;
  var kW150Ke = 1100;
  var conLai = 1300;
  var tienTra = 0;

  if (soDien <= 50) {
    tienTra = kW50Dau * soDien;
  } else if (soDien <= 100) {
    tienTra = kW50Dau * 50 + (soDien - 50) * kW50Ke;
  } else if (soDien <= 200) {
    tienTra = kW50Dau * 50 + kW50Ke * 50 + (soDien - 100) * kW100Ke;
  } else if (soDien <= 350) {
    tienTra =
      kW50Dau * 50 + kW50Ke * 50 + kW100Ke * 100 + (soDien - 200) * kW150Ke;
  } else {
    tienTra =
      kW50Dau * 50 +
      kW50Ke * 50 +
      kW100Ke * 100 +
      kW150Ke * 150 +
      (soDien - 350) * conLai;
  }
  //hiển thị kết quả
  hienThiKetQua(tienTra);
}
function hienThiKetQua(number) {
  document.getElementById("result").value = number.toLocaleString();
}
