function tinhTien() {
  //INPUT
  var khachHang = document.getElementById("khachHang").value;
  var maKhachHang = document.getElementById("maKhachHang").value;
  var kenhCaoCap = document.getElementById("kenhCaoCap").value * 1;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  var phiXuLyHoaDon = null;
  var phiDichVuCoBan = null;
  var phiThueKenhCaoCap = null;
  //XỮ LÝ
  if (khachHang == "nhaDan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenhCaoCap = 7.5;
  } else if (khachHang == "doanhNghiep") {
    phiXuLyHoaDon = 15;
    if (soKetNoi > 10) {
      phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    } else {
      phiDichVuCoBan = 75;
    }
    phiThueKenhCaoCap = 50;
  }
  // áp dụng công thức tính tiền
  var tongTien = 0;
  tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap * kenhCaoCap;
  hienThiKetQua(maKhachHang, tongTien);
}
function hienThiKetQua(name, number) {
  document.getElementById(
    "result"
  ).innerHTML = `Mã Khách Hàng:${name},Tiền Cáp:${number.toLocaleString()}$`;
}
