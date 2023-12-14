let nam = parseInt(prompt("Nhập một năm "));

if (nam % 4 == 0) {
    if (nam % 100 == 0) {
      if (nam % 400 == 0) {
        alert(nam + " Là năm nhuận");
      } else {
        alert(nam + " KHÔNG phải là năm nhuận ");
      }
    } else {
      alert(nam + " Là năm nhuận ");
    }
  } else {
    alert(nam + " Không phải là năm nhuận ");
  }
  