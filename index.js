const PDFdocument = require("pdfkit");
const fs = require("fs");

const pdfGenerate = (text, image)=>{
  const doc = new PDFdocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.fillColor('#AA6C39') 
  .rect(100-20, 100-20, 150+40, 150+40) 
  .fill(); 
  doc.image(image, 100, 100,
    {
    fit:[150,150],
  });
  doc.fontSize(16)
  .text(text, 350,100,)
  .fillColor("#000");
  doc.end();
}

myBio="Name: Pratham Basnet \nGrade: 11 (Science) \nGender: Male \nD.O.B: 2064-06-06 \nPhone No: 904-4449-452 \nAddress: Shantinagar-15"

pdfGenerate(myBio, "pp.jpg");