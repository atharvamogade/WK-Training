/* ---------------------------- INTIAL VARIABLES ---------------------------- */

// INPUT elements
const inputBox = document.getElementById('patient-id');

// BUTTON elements
const btnAdd = document.getElementById('btn-add');
const btnShowAll = document.getElementById('btn-show--all');
const btnShowUnique = document.getElementById('btn-show--unique');

// OUTPUT elements
const patientIdsUL = document.querySelector('ul');
const showType = document.querySelector('.show-type');

// Others
let allPatientIdList = [];


/* -------------------------------- FUNCTIONS ------------------------------- */

// Add new ID to Array
const addId = function() {
    if(inputBox.value == '') {
        alert('Empty submission not allowed!!');
    } else {
        allPatientIdList.push(inputBox.value);
        inputBox.value = '';
        // console.log(allPatientIdList);
    }
    
}

// Show all Patients
const showAll = function() {
    const template = allPatientIdList.map(patientId => `<li class="patient-id">${patientId}</li>`).join('\n');
    patientIdsUL.innerHTML = template;

    showType.textContent = 'All';
}

// Show unique patients
const showUnique = function() {
    const uniquePatientIdList = new Set(allPatientIdList);
    const uniquePatientIdArray = [...uniquePatientIdList];
    const template = uniquePatientIdArray.map(patientId => `<li class="patient-id">${patientId}</li>`).join('\n');
    patientIdsUL.innerHTML = template;

    showType.textContent = 'Unique';
}

/* ----------------------------- EVENT LISTNERS ----------------------------- */
btnAdd.addEventListener('click', addId);

btnShowAll.addEventListener('click', showAll);

btnShowUnique.addEventListener('click', showUnique);




