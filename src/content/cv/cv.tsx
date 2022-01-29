import { Document, Page } from "react-pdf";


const doc = require('./CV_Martin_Galvan.pdf')

console.log(doc)

const CV = () => {
  return (
    <>
      <Document file={doc} >
      <Page pageNumber={1} />
      </Document>
    </>
  );
};

export default CV;
