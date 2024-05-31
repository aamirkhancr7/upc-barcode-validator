// Validate GTIN and UPC barcode by check digit

function upcBarcodeValidator(barcode: string): boolean {
  // Check if the input is a string
  if (!barcode || typeof barcode !== 'string') throw new Error('Input must be a non-empty string');

  // Remove any whitespace or hyphens
  const cleanedBarcode = barcode.replace(/\s/g, '').replace(/-/g, '');

  // Check if barcode is of valid length (8, 12, 13, or 14 digits)
  if (![8, 12, 13, 14].includes(cleanedBarcode.length)) {
    return false;
  }

  // Check if barcode consists of only digits
  if (!/^\d+$/.test(cleanedBarcode)) {
    return false;
  }

  let sum = 0;

  switch (cleanedBarcode.length) {
    case 8: {
      // GTIN-8
      for (let i = 0; i < 7; i++) {
        sum += parseInt(cleanedBarcode[i]) * (i % 2 === 0 ? 3 : 1);
      }
      const checksum = (10 - (sum % 10)) % 10;
      return parseInt(cleanedBarcode[7]) === checksum;
    }
    case 12: {
      // GTIN-12 (UPC-A)
      for (let i = 0; i < 11; i++) {
        sum += parseInt(cleanedBarcode[i]) * (i % 2 === 0 ? 3 : 1);
      }
      const checksum = (10 - (sum % 10)) % 10;
      return parseInt(cleanedBarcode[11]) === checksum;
    }
    case 13: {
      // GTIN-13 (EAN-13)
      for (let i = 0; i < 12; i++) {
        sum += parseInt(cleanedBarcode[i]) * (i % 2 === 0 ? 1 : 3);
      }
      const checksum = (10 - (sum % 10)) % 10;
      return parseInt(cleanedBarcode[12]) === checksum;
    }
    case 14: {
      // GTIN-14
      for (let i = 0; i < 13; i++) {
        sum += parseInt(cleanedBarcode[i]) * (i % 2 === 0 ? 3 : 1);
      }
      const checksum = (10 - (sum % 10)) % 10;
      return parseInt(cleanedBarcode[13]) === checksum;
    }
    default:
      return false;
  }
}

export { upcBarcodeValidator };
