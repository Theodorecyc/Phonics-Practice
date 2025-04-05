let visitCount = 0;

// Increase visit counter
function increaseVisitCounter() {
  visitCount++;
  document.getElementById("counter").textContent = "Visits: " + visitCount;
}

// Randomly generate letters for each level
function generateLetterLevel1() {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  document.getElementById("level1-card").textContent = letters[Math.floor(Math.random() * letters.length)];
}

function generateLetterLevel2() {
  const letters1 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  const letters2 = ['a', 'e', 'i', 'o', 'u'];
  const letters3 = ['b', 'c', 'd', 'ff', 'g', 'ck', 'll', 'm', 'n', 'p', 's', 'ss', 't', 'v', 'x', 'z'];
  
  document.getElementById("level2-card1").textContent = letters1[Math.floor(Math.random() * letters1.length)];
  document.getElementById("level2-card2").textContent = letters2[Math.floor(Math.random() * letters2.length)];
  document.getElementById("level2-card3").textContent = letters3[Math.floor(Math.random() * letters3.length)];
}

function generateLetterLevel3() {
  const letters1 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  const letters2 = ['a', 'e', 'i', 'o', 'u'];
  const letters3 = ['be', 'b', 'ce', 'c', 'de', 'd', 'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss', 'te', 't', 've', 'v', 'x', 'ze', 'z'];

  document.getElementById("level3-card1").textContent = letters1[Math.floor(Math.random() * letters1.length)];
  document.getElementById("level3-card2").textContent = letters2[Math.floor(Math.random() * letters2.length)];
  document.getElementById("level3-card3").textContent = letters3[Math.floor(Math.random() * letters3.length)];
}

function generateLetterLevel4() {
  const letters1 = ['b', 'bl', 'br', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pl', 'pr', 'r', 's', 'sl', 'st', 'sc', 'sk', 'sm', 'sn', 'sw', 't', 'tr', 'v', 'w', 'y', 'z'];
  const letters2 = ['a', 'e', 'I', 'o', 'u'];
  const letters3 = ['mb', 'bt', 'nd', 'nt', 'mp', 'th', 'nk', 'be', 'b', 'ce', 'c', 'de', 'd', 'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss', 'te', 't', 've', 'v', 'x', 'ze', 'z', 'zz'];

  document.getElementById("level4-card1").textContent = letters1[Math.floor(Math.random() * letters1.length)];
  document.getElementById("level4-card2").textContent = letters2[Math.floor(Math.random() * letters2.length)];
  document.getElementById("level4-card3").textContent = letters3[Math.floor(Math.random() * letters3.length)];
}

function generateLetterLevel5() {
  const letters1 = ['b', 'bl', 'br', 'c', 'cl', 'cr', 'd', 'dr', 'dw', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'gh', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pl', 'pr', 'r', 's', 'squ', 'sl', 'st', 'sc', 'sk', 'sm', 'sn', 'sw', 't', 'tr', 'tw', 'ts', 'v', 'w', 'y', 'z'];
  const letters2 = ['a', 'e', 'i', 'o', 'u', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oo', 'oi', 'ou'];
  const letters3 = ['gh', 'ld', 'tch', 'dge', 'mb', 'bt', 'nd', 'nt', 'mp', 'th', 'nk', 'be', 'b', 'ce', 'c', 'de', 'd', 'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss', 'te', 't', 've', 'v', 'x', 'ze', 'z', 'zz'];

  document.getElementById("level5-card1").textContent = letters1[Math.floor(Math.random() * letters1.length)];
  document.getElementById("level5-card2").textContent = letters2[Math.floor(Math.random() * letters2.length)];
  document.getElementById("level5-card3").textContent = letters3[Math.floor(Math.random() * letters3.length)];
}

function generateLetterLevel6() {
  const letters1 = ['scr', 'sch', 'str', 'spl', 'wh', 'ch', 'th', 'ph', 'sh', 'qu', 'b', 'bl', 'br', 'c', 'cl', 'cr', 'd', 'dr', 'dw', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'gh', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pl', 'pr', 'r', 's', 'squ', 'sl', 'st', 'sc', 'sk', 'sm', 'sn', 'sw', 't', 'tr', 'tw', 'ts', 'v', 'w', 'y', 'z'];
  const letters2 = ['a', 'e', 'i', 'o', 'u', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oo', 'oi', 'ou'];
  const letters3 = ['r', 'l', 'w', 'y', 'gh', 'ch', 'sh', 'ph', 'ld', 'tch', 'dge', 'mb', 'bt', 'nd', 'nt', 'mp', 'th', 'nk', 'be', 'b', 'ce', 'c', 'de', 'd', 'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss', 'te', 't', 've', 'v', 'x', 'ze', 'z', 'zz'];

  document.getElementById("level6-card1").textContent = letters1[Math.floor(Math.random() * letters1.length)];
  document.getElementById("level6-card2").textContent = letters2[Math.floor(Math.random() * letters2.length)];
  document.getElementById("level6-card3").textContent = letters3[Math.floor(Math.random() * letters3.length)];
}

function generateLetterLevel7() {
  const letters1 = ['scr', 'sch', 'str', 'spl', 'wh', 'ch', 'th', 'ph', 'sh', 'qu', 'b', 'bl', 'br', 'c', 'cl', 'cr', 'd', 'dr', 'dw', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'gh', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pl', 'pr', 'r', 's', 'squ', 'sl', 'st', 'sc', 'sk', 'sm', 'sn', 'sw', 't', 'tr', 'tw', 'ts', 'v', 'w', 'y', 'z'];
  const letters2 = ['a', 'e', 'i', 'o', 'u', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oo', 'oi', 'ou'];
  const letters3 = ['cy', 'dy', 'fy', 'gy', 'ky', 'ly', 'my', 'ny', 'py', 'ry', 'sy', 'ty', 'vy', 'wy', 'xy', 'zy', 'dle', 'cle', 'tle', 'ple', 'cial', 'tial', 'tion', 'dual', 'cious', 'ture', 'gia', 'tious', 'lious', 'r', 'l', 'w', 'y', 'gh', 'ch', 'sh', 'ph', 'ld', 'tch', 'dge', 'mb', 'bt', 'nd', 'nt', 'mp', 'th', 'nk', 'be', 'b', 'ce', 'c', 'de', 'd', 'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss', 'te', 't', 've', 'v', 'x', 'ze', 'z', 'zz'];

  document.getElementById("level7-card1").textContent = letters1[Math.floor(Math.random() * letters1.length)];
  document.getElementById("level7-card2").textContent = letters2[Math.floor(Math.random() * letters2.length)];
  document.getElementById("level7-card3").textContent = letters3[Math.floor(Math.random() * letters3.length)];
}

increaseVisitCounter();
