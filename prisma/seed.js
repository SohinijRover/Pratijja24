const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

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


(async () => {
  await prisma.$connect();
  await exportFormDataToCSV();
})();
