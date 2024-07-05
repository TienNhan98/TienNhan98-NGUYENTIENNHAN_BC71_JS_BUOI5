function tinhTien() {
  //INPUT
  var hoTen = document.getElementById("hoTen").value;
  var thuNhap = document.getElementById("thuNhap").value * 1;
  var phuThuoc = document.getElementById("phuThuoc").value * 1;
  var thuNhapChiuThue = 0;
  thuNhapChiuThue = thuNhap - 4000000 - phuThuoc * 1600000;
  var tienThue = 0;
  //XỮ LÝ
  if (thuNhapChiuThue <= 60000000) {
    tienThue = thuNhapChiuThue * 0.05;
    console.log("🚀 ~ tinhTien ~ tienThue:", tienThue);
  } else if (60000000 < thuNhapChiuThue && thuNhapChiuThue <= 120000000) {
    tienThue = thuNhapChiuThue * 0.1;
  } else if (120000000 < thuNhapChiuThue && thuNhapChiuThue <= 210000000) {
    tienThue = thuNhapChiuThue * 0.15;
  } else if (210000000 < thuNhapChiuThue && thuNhapChiuThue <= 384000000) {
    tienThue = thuNhapChiuThue * 0.2;
  } else if (384000000 < thuNhapChiuThue && thuNhapChiuThue <= 624000000) {
    tienThue = thuNhapChiuThue * 0.25;
  } else if (624000000 < thuNhapChiuThue && thuNhapChiuThue <= 960000000) {
    tienThue = thuNhapChiuThue * 0.3;
  } else {
    tienThue = thuNhapChiuThue * 0.35;
  }
  hienThiKetQua(hoTen, tienThue);
}
// OUTPUT
function hienThiKetQua(name, number) {
  document.getElementById(
    "result"
  ).innerHTML = `Họ tên:${name} ;Tiền thuế thu nhập cá nhân:${number.toLocaleString()}VNĐ`;
}
