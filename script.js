let $ = document;
let gpaInput = $.querySelector(`.gpaInput`);
let codeInput = $.querySelector(`.codeInput`);
let addButton = $.querySelector(`.addButton`);
let showButton = $.querySelector(`.showButton`);
let deleteButton = $.querySelector(`.deleteButton`);
let resultsBox = $.querySelector(`.resultsBox`);
let erorBox = $.querySelector(`.erorBox`);
let avalableCodes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var selectedArray = [];
var checkUserCode;
var checkRepeatedEntry;
var userSelectedCodeToAdd;
var checkCodeToDelete;

addButton.addEventListener(`click`, () => {
  checkUserCode = avalableCodes.some((code) => {
    return code == codeInput.value;
  });
  checkRepeatedEntry = selectedArray.some((element) => {
    return element.code == codeInput.value;
  });
  var gpaFlag = 0 <= gpaInput.value <= 20;
  var gpaLengthFlag = gpaInput.value.length > 0;
  var codeLengthFlag = codeInput.value.length > 0;
  if (gpaLengthFlag && gpaFlag && codeLengthFlag && checkUserCode && !checkRepeatedEntry) {
    selectedArray.push({ code: codeInput.value, gpa: gpaInput.value });
    selectedArray.sort((a, b)=>{
      return a.gpa - b.gpa;
    })
    selectedArray.sort()
    gpaInput.value = ``;
    codeInput.value = ``;
    resultsBox.style.display = `inline-block`;
    erorBox.style.display = `none`;
    resultsBox.innerHTML = ``;
    selectedArray.forEach((element) => {
      resultsBox.innerHTML += `<span class="text-white">code: ${element.code}, GPA: ${element.gpa}</span> </br>`;
    });
  } else if (checkRepeatedEntry) {
    gpaInput.value = ``;
    codeInput.value = ``;
    resultsBox.style.display = `none`;
    erorBox.style.display = `inline-block`;
    erorBox.innerHTML = `<span class="text-white"> reapeted code! </span>`;
  } else if (!codeLengthFlag || !gpaLengthFlag) {
    gpaInput.value = ``;
    codeInput.value = ``;
    resultsBox.style.display = `none`;
    erorBox.style.display = `inline-block`;
    erorBox.innerHTML = `<span class="text-white"> some of youe fildes are empty! </span>`;
  } else if (!gpaFlag) {
    gpaInput.value = ``;
    codeInput.value = ``;
    resultsBox.style.display = `none`;
    erorBox.style.display = `inline-block`;
    erorBox.innerHTML = `<span class="text-white"> GPA mot be between 0 & 20! </span>`;
  } else if (!checkUserCode) {
    gpaInput.value = ``;
    codeInput.value = ``;
    resultsBox.style.display = `none`;
    erorBox.style.display = `inline-block`;
    erorBox.innerHTML = `<span class="text-white"> toue code not found! </span>`;
  }
});

showButton.addEventListener(`click`, () => {
  resultsBox.style.display = `inline-block`;
  erorBox.style.display = `none`;
});

deleteButton.addEventListener(`click`, () => {
  var userSelectedElementToDelete;
  checkCodeToDelete = selectedArray.some((element) => {
    userSelectedElementToDelete = element;
    return element.code == codeInput.value;
  });
  var userSelectedIndexToDelete = selectedArray.findIndex((element) => {
    return element == userSelectedElementToDelete;
  });
  // console.log(userSelectedIndexToDelete)
  if (checkCodeToDelete) {
    selectedArray.splice(userSelectedIndexToDelete, 1);
    gpaInput.value = ``;
    codeInput.value = ``;
    resultsBox.style.display = `inline-block`;
    erorBox.style.display = `none`;
    resultsBox.innerHTML = ``;
    selectedArray.forEach((element) => {
      resultsBox.innerHTML += `<span class="text-white">code: ${element.code}, GPA: ${element.gpa}</span> </br>`;
    });
  }else{
    gpaInput.value = ``;
    codeInput.value = ``;
    resultsBox.style.display = `none`;
    erorBox.style.display = `inline-block`;
    erorBox.innerHTML = `the code not found!`
  }
});
