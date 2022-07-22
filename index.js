/** Bài số 1
 * Mô hình 3 khối: Xuất 3 số theo thứ tự tăng dần
 * Đầu vào:
 * - Tạo biến so1 cho người dùng nhập
 * - Tạo biến so2 cho người dùng nhập
 * - Tạo biến so3 cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Rồi đi so sánh với lệnh if - else
 * Đầu ra:
 * - Xuất 3 số theo thứ tự tăng dần
 */

function sapXep() {
  var so1 = +document.getElementById("so1").value;
  var so2 = +document.getElementById("so2").value;
  var so3 = +document.getElementById("so3").value;
  var ketQua = "";
  if (so1 >= so2 && so2 >= so3) {
    ketQua = so3 + "<" + so2 + "<" + so1;
  } else if (so1 >= so2 && so1 >= so3) {
    ketQua = so2 + "<" + so3 + "<" + so1;
  } else if (so1 >= so2 && so3 >= so1) {
    ketQua = so2 + "<" + so1 + "<" + so3;
  } else if (so2 >= so1 && so3 >= so2) {
    ketQua = so1 + "<" + so2 + "<" + so3;
  } else if (so2 >= so3 && so3 >= so1) {
    ketQua = so1 + "<" + so3 + "<" + so2;
  } else {
    ketQua = so3 + "<" + so1 + "<" + so2;
  }

  document.getElementById("alert1").innerHTML = ketQua;
}

/** Bài số 2
 * Mô hình 3 khối: Chương trình chào hỏi
 * Đầu vào:
 * - Tạo biến thanhVien cho người dùng chọn
 * Xử lý:
 * - DOM giá trị người dùng chọn
 * Đầu ra:
 * - Gửi lời chào đến từng thành viên
 */

function guiLoiChao() {
  var thanhVien = +document.getElementById("thanhVien").value;
  var thongBao="";
  switch(thanhVien){
    case 1: {
      thongBao ="Người lạ ơi";
      break;
    }
    case 2: {
      thongBao ="Bố";
      break;
    }
    case 3: {
      thongBao ="Mẹ";
      break;
    }
    case 4: {
      thongBao ="Anh Trai";
      break;
    }
    case 5: {
      thongBao ="Em Gái";
      break;
    }
  }
  
  document.getElementById("alert2").innerHTML = "Xin chào " + thongBao + "!";
}

/** Bài số 3
 * Mô hình 3 khối: Đếm số chẵn lẻ
 * Đầu vào:
 * - Tạo biến number1 cho người dùng nhập
 * - Tạo biến number2 cho người dùng nhập
 * - Tạo biến number3 cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Kiểm tra có phải số dương hay không %2
 * - Đếm số chẵn, số lẻ
 * Đầu ra:
 * - Xuất kết quả số chẵn lẻ
 */

function dem() {
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;
  var count = 0;
  number1 = number1 % 2;
  number2 = number2 % 2;
  number3 = number3 % 2;
  if (!number1) {
    count++;
  }
  if (!number2) {
    count += 1;
  }
  if (!number3) {
    count += 1;
  }
  var countAm = 3 - count;
  document.getElementById("alert3").innerHTML =
    "Có " + count + " số chẵn, " + countAm + " số lẻ";
}

/** Bài số 4
 * Mô hình 3 khối: Đoán hình tam giác
 * Đầu vào:
 * - Tạo biến canh1 cho người dùng nhập
 * - Tạo biến canh2 cho người dùng nhập
 * - Tạo biến canh3 cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Kiểm tra có phải số dương hay không %2
 * - Đếm số chẵn, số lẻ
 * Đầu ra:
 * - Thông báo kết quả hình tam giác
 */

function xetTamGiac() {
  var canh1 = +document.getElementById("canh1").value;
  var canh2 = +document.getElementById("canh2").value;
  var canh3 = +document.getElementById("canh3").value;
  var tamGiac = "";
  if (canh1 === canh2 && canh2 === canh3 && canh1 === canh3) {
    tamGiac = "Tam Giác Đều";
  } else if (canh1 === canh2 || canh2 === canh3 || canh1 === canh3) {
    tamGiac = "Tam Giác Cân";
  } else if (
    canh1 * canh1 === canh2 * canh2 + canh3 * canh3 ||
    canh2 * canh2 === canh1 * canh1 + canh3 * canh3 ||
    canh3 * canh3 === canh2 * canh2 + canh1 * canh1
  ) {
    tamGiac = "Tam Giác Vuông";
  } else {
    tamGiac = "Tam Giác Khác";
  }
  document.getElementById("alert4").innerHTML = tamGiac;
}

/** Bài số 5
 * Mô hình 3 khối: Tính Ngày Tháng Năm
 * Đầu vào:
 * - Tạo biến date cho người dùng nhập
 * - Tạo biến month cho người dùng nhập
 * - Tạo biến year cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Kiểm tra thông tin nhập vào đúng hay không?
 * - Thực hiện phép tính
 * Đầu ra:
 * - Thông báo kết quả
 */
function yesterday() {
  var date = +document.getElementById("date").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  //Kiểm tra ngày,tháng có hợp lệ ko?
  if (!date || !month || !year) {
    document.getElementById("alert5").innerHTML =
      "Vui lòng nhập ngày/tháng/năm";
    return;
  }
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      if (date > 31 || date < 1) {
        document.getElementById("alert5").innerHTML = "Ngày không xác định";
        return;
      }
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      if (date > 30 || date < 1) {
        document.getElementById("alert5").innerHTML = "Ngày không xác định";
        return;
      }
      break;
    }
    case 2: {
      if (date > 28 || date < 1) {
        document.getElementById("alert5").innerHTML = "Ngày không xác định";
        return;
      }
      break;
    }
    default: {
      document.getElementById("alert5").innerHTML = "Tháng không xác định";
      return;
    }
  }
  //Ngày hôm qua
  if (date === 1) {
    switch (month) {
      case 1: {
        date = 31;
        month = 12;
        year--;
        break;
      }
      case 2:
      case 4:
      case 6:
      case 8:
      case 9:
      case 11: {
        date = 31;
        month--;
        break;
      }
      case 3: {
        date = 28;
        month--;
        break;
      }
      case 5:
      case 7:
      case 10:
      case 12: {
        date = 30;
        month--;
        break;
      }
    }
  } else {
    date--;
  }
  document.getElementById("alert5").innerHTML = date + "-" + month + "-" + year;
}
function tomorrow() {
  var date = +document.getElementById("date").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  //Kiểm tra ngày,tháng có hợp lệ ko?
  if (!date || !month || !year) {
    document.getElementById("alert5").innerHTML =
      "Vui lòng nhập ngày/tháng/năm";
    return;
  }
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      if (date > 31 || date < 1) {
        document.getElementById("alert5").innerHTML = "Ngày không xác định";
        return;
      }
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      if (date > 30 || date < 1) {
        document.getElementById("alert5").innerHTML = "Ngày không xác định";
        return;
      }
      break;
    }
    case 2: {
      if (date > 28 || date < 1) {
        document.getElementById("alert5").innerHTML = "Ngày không xác định";
        return;
      }
      break;
    }
    default: {
      document.getElementById("alert5").innerHTML = "Tháng không xác định";
      return;
    }
  }
  //Ngày mai
  if (date === 31) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10: {
        date = 1;
        month++;
        break;
      }
      case 12: {
        date = 1;
        month = 1;
        year++;
      }
    }
  } else if (date === 30) {
    switch (month) {
      case 4:
      case 6:
      case 9:
      case 11: {
        date = 1;
        month++;
      }
    }
  } else if (date === 28) {
    switch (month) {
      case 2: {
        date = 1;
        month++;
      }
    }
  } else {
    date++;
  }
  document.getElementById("alert5").innerHTML = date + "-" + month + "-" + year;
}

/** Bài số 6
 * Mô hình 3 khối: Tính Ngày
 * Đầu vào:
 * - Tạo biến month cho người dùng nhập
 * - Tạo biến year cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Kiểm tra thông tin nhập vào đúng hay không?
 * - Thực hiện phép tính
 * Đầu ra:
 * - Thông báo kết quả
 */

function tinhNgay() {
  var month = +document.getElementById("month1").value;
  var year = +document.getElementById("year1").value;
  var chia4 = year % 4;
  var chia100 = year % 100;
  var chia400 = year % 400;
  var thongBao = document.getElementById("alert6");
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      thongBao.innerHTML = "Tháng " + month + " có 31 ngày";
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      thongBao.innerHTML = "Tháng " + month + " có 30 ngày";
      break;
    }
    case 2: {
      if (!chia4 && chia100) {
        thongBao.innerHTML = "Tháng " + month + " có 29 ngày";
      } else if (!chia400) {
        thongBao.innerHTML = "Tháng " + month + " có 29 ngày";
      } else {
        thongBao.innerHTML = "Tháng " + month + " có 28 ngày";
      }

      break;
    }
    default: {
      thongBao.innerHTML = "Tháng không hợp lệ";
    }
  }
}

/** Bài số 7
 * Mô hình 3 khối: Đọc Số
 * Đầu vào:
 * - Tạo biến num2 cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Tách số hangTram, hangChuc, hangDV
 * - Thực hiện phép gán
 * Đầu ra:
 * - Thông báo kết quả
 */

function docSo() {
  var num2 = +document.getElementById("num2").value;
  var hangTram = Math.floor(num2 / 100);
  var hangChuc = Math.floor((num2 % 100) / 10);
  var hangDV = num2 % 10;
  switch (hangTram) {
    case 1: {
      hangTram = "một";
      break;
    }
    case 2: {
      hangTram = "hai";
      break;
    }
    case 3: {
      hangTram = "ba";
      break;
    }
    case 4: {
      hangTram = "bốn";
      break;
    }
    case 5: {
      hangTram = "năm";
      break;
    }
    case 6: {
      hangTram = "sáu";
      break;
    }
    case 7: {
      hangTram = "bảy";
      break;
    }
    case 8: {
      hangTram = "tám";
      break;
    }
    case 9: {
      hangTram = "chín";
      break;
    }
    case 0: {
      document.getElementById("alert7").innerHTML = "Nhập vào 3 chữ số";
      return;
    }
  }
  switch (hangChuc) {
    case 1: {
      hangChuc = "một";
      break;
    }
    case 2: {
      hangChuc = "hai";
      break;
    }
    case 3: {
      hangChuc = "ba";
      break;
    }
    case 4: {
      hangChuc = "bốn";
      break;
    }
    case 5: {
      hangChuc = "năm";
      break;
    }
    case 6: {
      hangChuc = "sáu";
      break;
    }
    case 7: {
      hangChuc = "bảy";
      break;
    }
    case 8: {
      hangChuc = "tám";
      break;
    }
    case 9: {
      hangChuc = "chín";
      break;
    }
    case 0: {
      hangChuc = "lẻ";
      break;
    }
  }
  switch (hangDV) {
    case 1: {
      hangDV = "một";
      break;
    }
    case 2: {
      hangDV = "hai";
      break;
    }
    case 3: {
      hangDV = "ba";
      break;
    }
    case 4: {
      hangDV = "bốn";
      break;
    }
    case 5: {
      hangDV = "năm";
      break;
    }
    case 6: {
      hangDV = "sáu";
      break;
    }
    case 7: {
      hangDV = "bảy";
      break;
    }
    case 8: {
      hangDV = "tám";
      break;
    }
    case 9: {
      hangDV = "chín";
      break;
    }
    case 0: {
      hangDV = "";
      break;
    }
  }
  if (hangChuc === "lẻ") {
    document.getElementById("alert7").innerHTML =
      hangTram + " trăm " + hangChuc + " " + hangDV;
  } else {
    document.getElementById("alert7").innerHTML =
      hangTram + " trăm " + hangChuc + " mươi " + hangDV;
  }
}

/** Bài số 8
 * Mô hình 3 khối: Tìm sinh viên xa nhất
 * Đầu vào:
 * - Tạo biến name, x, y  cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Thực hiện phép tính độ dài
 * - So sánh độ dài
 * Đầu ra:
 * - Thông báo kết quả
 */

function timDuong() {
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  var name3 = document.getElementById("name3").value;
  var thongBao = "";
  var x1 = +document.getElementById("x1").value;
  var x2 = +document.getElementById("x2").value;
  var x3 = +document.getElementById("x3").value;
  var x4 = +document.getElementById("x4").value;
  var y1 = +document.getElementById("y1").value;
  var y2 = +document.getElementById("y2").value;
  var y3 = +document.getElementById("y3").value;
  var y4 = +document.getElementById("y4").value;
  var t1 = Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1));
  var t2 = Math.sqrt((x4 - x2) * (x4 - x2) + (y4 - y2) * (y4 - y2));
  var t3 = Math.sqrt((x4 - x3) * (x4 - x3) + (y4 - y3) * (y4 - y3));
  if (t1 > t2 && t1 > t3) {
    thongBao = name1;
  } else if (t2 > t1 && t2 > t3) {
    thongBao = name2;
  } else if (t3 > t1 && t3 > t2) {
    thongBao = name3;
  } else if (t1 === t2 && t2 === t3) {
    thongBao = "Cả 3 sinh viên có quãng đường bằng nhau";
  } else if (t1 === t2 && t2 > t3) {
    thongBao = name1 + " và " + name2;
  } else if (t1 === t3 && t3 > t2) {
    thongBao = name1 + " và " + name3;
  } else if (t2 === t3 && t3 > t1) {
    thongBao = name2 + " và " + name3;
  }
  document.getElementById("alert8").innerHTML =
    "Sinh viên xa trường nhất là: " + thongBao;
}
