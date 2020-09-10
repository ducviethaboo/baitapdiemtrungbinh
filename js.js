let inputPhysic = prompt("Nhap diem Vat ly");
let inputChemistry = prompt("Nhap diem Hoa hoc");
let inputBiology = prompt("Nhap diem Sinh hoc");
    let physhic =parseInt(inputPhysic);
    let chemistry =parseInt(inputChemistry);
    let biology =parseInt(inputBiology);
  let SUM = physhic + chemistry + biology;
  let SCORE = SUM/3;
         document.write("Total=" + SUM);
         document.write("<br>")
         document.write("Trung binh=" + SCORE);
