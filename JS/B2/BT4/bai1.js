let vatly, hoahoc, sinhhoc

vatly = prompt ('Hay nhap diem vat ly: ')
hoahoc = prompt ('Hay nhap diem hoa hoc: ')
sinhhoc = prompt ('Hay nhap diem sinh hoc: ')

diemtrungbinh = (vatly + hoahoc + sinhhoc)/3
tong = vatly + hoahoc + sinhhoc
document.write('Diem trung binh cua hoc sinh la: ' +diemtrungbinh)
document.write ('</br>')
document.write('Diem tong cua hoc sinh la: ' +tong)