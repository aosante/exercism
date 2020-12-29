// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const translate = str => {
//   const codons = [];
//   const names = [];
//   if (!str) {
//     return names;
//   }
//   for (let i = 0; i < str.length; i += 3) {
//     codons.push(str.substring(i, i + 3));
//   }
//   let validateArray = [];
//   // construct array of all possible and valid codons
//   proteins.forEach((protein) => {
//     validateArray.push(protein.codons);
//   });
//   // flatten array of arrays
//   validateArray = [].concat.apply([], validateArray);

//   // loop through codons and proteins and push into names array
//   codons.forEach(cod => {
//     // check if codon string has an invalid codon
    
//     if (!validateArray.includes(cod)) names.push('INVALID')
    
//     proteins.forEach(protein => {
//       if (protein.codons.includes(cod)) {
//         names.push(protein.name);
//       }
//     });
//   });

//   if(names.includes('INVALID') && !names.includes('STOP')) throw new Error('Invalid codon')

//   //slice array if it has the 'STOP name
//   const nameArray =
//     names.indexOf('STOP') !== -1
//       ? names.slice(0, names.indexOf('STOP'))
//       : names;
//   return nameArray;
// };

// const proteins = [
//   { codons: ['AUG'], name: 'Methionine' },
//   { codons: ['UUU', 'UUC'], name: 'Phenylalanine' },
//   { codons: ['UUA', 'UUG'], name: 'Leucine' },
//   { codons: ['UCU', 'UCC', 'UCA', 'UCG'], name: 'Serine' },
//   { codons: ['UAU', 'UAC'], name: 'Tyrosine' },
//   { codons: ['UGU', 'UGC'], name: 'Cysteine' },
//   { codons: ['UGG'], name: 'Tryptophan' },
//   { codons: ['UAA', 'UAG', 'UGA'], name: 'STOP' }
// ];

// SOLUTION 2
const codonMap = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine', UUC: 'Phenylalanine',
    UUA: 'Leucine', UUG: 'Leucine',
    UCU: 'Serine', UCC: 'Serine', UCA: 'Serine', UCG: 'Serine',
    UAU: 'Tyrosine', UAC: 'Tyrosine',
    UGU: 'Cysteine', UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP', UAG: 'STOP', UGA: 'STOP' 
};

export const translate = str => {
  if(!str) return [];
  let namesArray = [];
  // regex splits string into array of 3 character strings e.g 'UUUUUA' => ['UUU', UUUA]
  // https://stackoverflow.com/questions/6259515/how-can-i-split-a-string-into-segments-of-n-characters
  for (const codon of str.match(/(.{1,3})/g)) {
    let protein = codonMap[codon];
    if(!protein) throw new Error('Invalid codon')
    if(protein === 'STOP') break;
    namesArray.push(protein)
  }

  return namesArray
}