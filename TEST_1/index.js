function ketQua() {
  //input
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var khuVuc = document.getElementById("khuVuc").value * 1;
  //   console.log("🚀 ~ ketQua ~ khuVuc:", khuVuc);
  var doiTuong = document.getElementById("doiTuong").value * 1;
  //   console.log("🚀 ~ ketQua ~ doiTuong:", doiTuong);
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;
  // xữ lý
  var tongDiem = 0;
  tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
  // hiển thị

  if (tongDiem >= diemChuan) {
    document.getElementById(
      "result"
    ).value = ` Bạn Đã Đậu, Tổng Điểm Đạt ${tongDiem}`;
  } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
    document.getElementById("result").value = ` Bạn Đã Rớt, Vì Có Điểm 0 Hihi`;
  } else {
    document.getElementById(
      "result"
    ).value = ` Bạn Đã Rớt, Tổng Điểm Đạt ${tongDiem}`;
  }
}
