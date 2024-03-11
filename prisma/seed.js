const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const xlsxPopulate = require("xlsx-populate");
const { GoogleSpreadsheet } = require('google-spreadsheet');

const prisma = new PrismaClient();

async function exportFormDataToCSV() {
  try {
    console.log('Fetching data from form1...');
    const form1Data = await prisma.form1.findMany();
    await exportToCSV(form1Data, "crossteam_registerations.csv");

    console.log('Fetching data from form2...');
    const form2Data = await prisma.form2.findMany();
    await exportToCSV(form2Data, "institutionalteam_registerations.csv");

    console.log('Fetching data from form3...');
    const form3Data = await prisma.form3.findMany();
    await exportToCSV(form3Data, "independentAdj_registerations.csv");

    console.log('Fetching data from form4...');
    const form4Data = await prisma.form4.findMany();
    await exportToCSV(form4Data, "iasa.csv");

    console.log('Fetching data from contact...');
    const contactData = await prisma.contact.findMany();
    await exportToCSV(contactData, "contact.csv");

    console.log('CSV export completed successfully');

    // Convert CSV to Excel and send to Google Sheets
    await convertCSVToExcelAndSendToGoogleSheets();
  } catch (error) {
    console.error('Error during CSV export:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function exportToCSV(data, fileName) {
  const filePath = path.join(__dirname, `data/${fileName}`);
  const csvWriter = createCsvWriter({
    path: filePath,
    header: Object.keys(data[0]).map((key) => ({ id: key, title: key })),
  });

  await csvWriter.writeRecords(data);
  console.log(`Data exported to ${filePath}`);
}

async function convertCSVToExcelAndSendToGoogleSheets() {
  try {
    // List of CSV files to process
    const csvFiles = [
      "crossteam_registerations.csv",
      "institutionalteam_registerations.csv",
      "independentAdj_registerations.csv",
      "iasa.csv",
      "contact.csv",
    ];

    // Create a new workbook
    const workbook = await xlsxPopulate.fromBlankAsync();

    for (const csvFile of csvFiles) {
      // Read CSV data
      const csvData = fs.readFileSync(path.join(__dirname, `data/${csvFile}`), "utf-8");

      // Truncate sheet name if it exceeds 31 characters
      const sheetName = csvFile.split(".")[0].slice(0, 31);

      // Add a new sheet to the workbook
      const sheet = workbook.addSheet(sheetName);

      // Write CSV data to the sheet
      const rows = csvData.trim().split("\n");
      rows.forEach((row, rowIndex) => {
        const columns = row.split(",");
        columns.forEach((col, colIndex) => {
          sheet.cell(rowIndex + 1, colIndex + 1).value(col);
        });
      });
    }

    // Save the workbook to an Excel file
    const excelFilePath = path.join(__dirname, "data/all_data.xlsx");
    await workbook.toFileAsync(excelFilePath);

    console.log(`All CSV files converted to Excel: ${excelFilePath}`);


  } catch (error) {
    console.error('Error during CSV to Excel conversion and Google Sheets update:', error);
  }
}


// Main part of the script
(async () => {
  try {
    await exportFormDataToCSV();
  } catch (error) {
    console.error('Error during data processing:', error);
  }
})();
