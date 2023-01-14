/*
declare variable asciiLtrs for, get codes by converting a,z,A,Z to ascii
(65-90 are ascii codes for uprCase letters, 95-121 for lwrCase)
*/

const asciLtrs = [
  "a".charCodeAt(),
  "z".charCodeAt(),
  "A".charCodeAt(),
  "Z".charCodeAt(),
];

/* function changeAscii, takes asciiToShift as input
- declare letterShift (+15) - how many letters we're shifting in alphabet by
- declare list cycleLimit - this is the highest ascii no. before needing to go from start of alphabet

if asciiInput is between 65 (ascii for 'a') and (90 (asci for 'z') minus lettershift 
OR uprCase equivalent (95 and 21 - lettershift)
-- return asciiToShift + letterShift

else 
-- return (asciiToShift + letterShift) - 26 (length of alphabet)
    This should cycle it back to the beginning

*/

function changeAscii(asciiToShift) {
  const letterShift = 15;
  const cycleLimit = [asciLtrs[1] - letterShift, asciLtrs[3] - letterShift];

  if (
    (asciiToShift >= asciLtrs[0] && asciiToShift <= cycleLimit[0]) ||
    (asciiToShift >= asciLtrs[2] && asciiToShift <= cycleLimit[1])
  ) {
    return asciiToShift + letterShift;
  } else {
    return asciiToShift + letterShift - 26;
  }
}

/* function createCyhper, take inputMsg in parameter
- empty str variable for cypherMsg

- iterate through each character of input message

-- convert it to asci

-- if ascii no. is within the numbers ascii nums for letters
-- -- using function changeAscii to shift the letter by 15

-- convert back to normal character
-- concatenate to cypherMsg

- return cypherMsg

*/

function createCypher(userMsg) {
  let cypherMsg = "";

  for (let i of userMsg) {
    let charInAscii = i.charCodeAt();

    if (
      (charInAscii >= asciLtrs[0] && charInAscii <= asciLtrs[1]) ||
      (charInAscii >= asciLtrs[2] && charInAscii <= asciLtrs[3])
    ) {
      charInAscii = changeAscii(charInAscii);
    }

    cypherMsg += String.fromCharCode(charInAscii);
  }

  return cypherMsg;
}

// Input a message below to test it
let inputMessage = "Hello reviewer!";

//This will print the result o the console
console.log(createCypher(inputMessage));
