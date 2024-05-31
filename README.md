# Barcode / UPC Validator

A simple JavaScript library to validate GTIN and UPC barcodes by their check digit. This library supports validation for GTIN-8, GTIN-12 (UPC-A), GTIN-13 (EAN-13), and GTIN-14 barcodes.

## Installation

You can install the package via npm:

```bash
npm install upc-barcode-validator
```

## Usage

The `upc-barcode-validator` package exports a single function `upcBarcodeValidator` which takes a barcode string as an input and returns a boolean indicating whether the barcode is valid.

```
const upcBarcodeValidator = require('upc-barcode-validator');

const validBarcodes = [
"12345670",         // Valid GTIN-8
"012345678905",     // Valid GTIN-12 (UPC-A)
"1234567890128",    // Valid GTIN-13 (EAN-13)
"12345678901231",   // Valid GTIN-14
"00012345678905"    // Valid GTIN-12 (UPC-A) with leading zeros
];

upcBarcodeValidator.forEach(barcode => {
  console.log(`${barcode}: ${upcBarcodeValidator(barcode)}`);
});
```

## Function Signature

upcBarcodeValidator(barcode: string): boolean

- `barcode`: The barcode to be validated. This must be a string.
- Returns `true` if the barcode is valid, `false` otherwise.

## Error Handling

If the input is not a string, the function will throw an error.

```
try {
  upcBarcodeValidator(12345678905);
} catch (e) {
  console.error(`Error: ${e.message}`);
}
```
