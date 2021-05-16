// оценка уровней
let charityPow = +prompt("Оцените степеть благотворительности от 0 до 5", 3)
let personalGrownPow = +prompt("Оцените личный рост от 0 до 5", 3)
let familyPow = +prompt("Оцените семейный рост от 0 до 5", 3)
let businessPow = +prompt("Оцените дела на работе от 0 до 5", 3)
let healthPow = +prompt("Оцените здоровье от 0 до 5", 3)
let lifePow = +prompt("Оцените яркость жизни от 0 до 5", 3)
let friendsPow = +prompt("Оцените дружеские отношения от 0 до 5", 3)
let investmentsPow = +prompt("Оцените инвестиции от 0 до 5", 3)

// получение коллекций
let charytyLevel = document.querySelectorAll('.charity_level')
let personalGrownLevel = document.querySelectorAll('.personal_grown_level')
let familyLevel = document.querySelectorAll('.family_level')
let businessLevel = document.querySelectorAll('.business_level')
let healthLevel = document.querySelectorAll('.health_level')
let lifeLevel = document.querySelectorAll('.life_level')
let friendsLevel = document.querySelectorAll('.friends_level')
let investmentsLevel = document.querySelectorAll('.investments_level')

console.log(charytyLevel, personalGrownLevel, familyLevel, businessLevel,
    healthLevel, lifeLevel, friendsLevel, investmentsLevel);

// отрисовка колеса
for (let i = 0; i < charityPow; i++) {
    charytyLevel[i].setAttribute("opacity", "1");
}
for (let i = 0; i < personalGrownPow; i++) {
    personalGrownLevel[i].setAttribute("opacity", "1");
}
for (let i = 0; i < familyPow; i++) {
    familyLevel[i].setAttribute("opacity", "1");
}
for (let i = 0; i < businessPow; i++) {
    businessLevel[i].setAttribute("opacity", "1");
}
for (let i = 0; i < healthPow; i++) {
    healthLevel[i].setAttribute("opacity", "1");
}
for (let i = 0; i < lifePow; i++) {
    lifeLevel[i].setAttribute("opacity", "1");
}
for (let i = 0; i < friendsPow; i++) {
    friendsLevel[i].setAttribute("opacity", "1");
}
for (let i = 0; i < investmentsPow; i++) {
    investmentsLevel[i].setAttribute("opacity", "1");
}