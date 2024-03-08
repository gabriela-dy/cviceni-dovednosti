/*Ukol 3 - DOVEDNOSTI*/
const skills = {
    skill1: Number(prompt("Zadejte Vaši úroveň znalosti HTML od 0 do 100.")),
    skill2: Number(prompt("Zadejte Vaši úroveň znalosti CSS od 0 do 100.")),
    skill3: Number(prompt("Zadejte Vaši úroveň znalosti Javascript od 0 do 100.")),
}
function updateSkill(id, skills) {
    if (skills > 100 || skills < 0) {
        console.log("Neplatné číslo. Zvolte číslo v rozsahu 0 - 100.");
        return; // Vyhodíme se z funkce, pokud je číslo mimo rozsah
    }

    let elementSkill = document.getElementById(id)
    console.log(elementSkill)
    let skillValue = elementSkill.getElementsByClassName("skill__value")[0];
    let progressBar = elementSkill.getElementsByClassName("skill__progress")[0];
    if (!skillValue || !progressBar) {
        console.log("Prvek nebyl nalezen.");
        return; // Vyhodíme se z funkce, pokud nejsou nalezeny požadované prvky
    }
    skillValue.textContent = skills + ' / 100';
    progressBar.style.width = skills + '%';
}

console.log(skills)
updateSkill("skill1", skills.skill1);
updateSkill("skill2", skills.skill2);
updateSkill("skill3", skills.skill3);