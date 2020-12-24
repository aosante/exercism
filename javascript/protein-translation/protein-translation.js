import { strict } from 'assert';

//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = str => {
  const codons = [];
  const names = [];
  if (!str) {
    return names;
  }
  for (let i = 0; i < str.length; i += 3) {
    codons.push(str.substring(i, i + 3));
  }
  let validateArray = [];
  // construct array of all possible and valid codons
  proteins.forEach((protein, i) => {
    validateArray.push(protein.codons);
  });
  // flatten array of arrays
  validateArray = [].concat.apply([], validateArray);

  // loop through codons and proteins and push into names array
  codons.forEach(cod => {
    // check if codon string has an invalid codon
    if (!validateArray.includes(cod)) throw new Error('Invalid codon');
    proteins.forEach(protein => {
      if (protein.codons.includes(cod)) {
        names.push(protein.name);
      }
    });
  });
  //slice array if it has the 'STOP name
  const nameArray =
    names.indexOf('STOP') !== -1
      ? names.slice(0, names.indexOf('STOP'))
      : names;
  return nameArray;
};

const proteins = [
  { codons: ['AUG'], name: 'Methionine' },
  { codons: ['UUU', 'UUC'], name: 'Phenylalanine' },
  { codons: ['UUA', 'UUG'], name: 'Leucine' },
  { codons: ['UCU', 'UCC', 'UCA', 'UCG'], name: 'Serine' },
  { codons: ['UAU', 'UAC'], name: 'Tyrosine' },
  { codons: ['UGU', 'UGC'], name: 'Cysteine' },
  { codons: ['UGG'], name: 'Tryptophan' },
  { codons: ['UAA', 'UAG', 'UGA'], name: 'STOP' }
];
