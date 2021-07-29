const percentageValues = [55, 60, 70, 89]


const profitBar = document.querySelector('.profit-bar')
const profitBarMeasure = document.querySelector('.profit-bar-measure')
profitBarMeasure.innerHTML = percentageValues[2] + "%"
profitBar.style.width = percentageValues[2] + "%"

const feedbackBar = document.querySelector('.feedback-bar')
const feedbackBarMeasure = document.querySelector('.feedback-bar-measure')
feedbackBarMeasure.innerHTML = percentageValues[3] + "%"
feedbackBar.style.width = percentageValues[3] + "%"

const newOrdersBar = document.querySelector('.new-orders-bar')
const newOrdersBarMeasure = document.querySelector('.new-orders-bar-measure')
newOrdersBarMeasure.innerHTML = percentageValues[0] + "%"
newOrdersBar.style.width = percentageValues[0] + "%"

const newUsersBar = document.querySelector('.new-users-bar')
const newUsersBarMeasure = document.querySelector('.new-users-bar-measure')
newUsersBarMeasure.innerHTML = percentageValues[1] + "%"
newUsersBar.style.width = percentageValues[1] + "%"
