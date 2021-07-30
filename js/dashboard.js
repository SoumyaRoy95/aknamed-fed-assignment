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

const team1 = document.querySelector('.team1')
const teamA = ["ZAI", "MD", "CDS", "BDD"]
teamA.map((elementName, index) => {
    const element = document.createElement('div')
    element.classList.add("member-card-circle")
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      element.style.backgroundColor = getRandomColor();
      element.style.left = ((teamA.length - index -1)*10)+"%"
      element.innerHTML = elementName
      team1.appendChild(element)
})

const team2 = document.querySelector('.team2')
const teamB = ["ZAI", "MD", "CDS"]
teamB.map((elementName, index) => {
    const element = document.createElement('div')
    element.classList.add("member-card-circle")
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      element.style.backgroundColor = getRandomColor();
      element.style.left = ((teamB.length - index -1)*10)+"%"
      element.innerHTML = elementName
      team2.appendChild(element)
})

const team3 = document.querySelector('.team3')
const teamC = ["ABL", "BOK"]
teamC.map((elementName, index) => {
    const element = document.createElement('div')
    element.classList.add("member-card-circle")
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      element.style.backgroundColor = getRandomColor();
      element.style.left = ((teamC.length - index -1)*10)+"%"
      element.innerHTML = elementName
      team3.appendChild(element)
})

const team4 = document.querySelector('.team4')
const teamD = ["ABL", "BOK", "KSF", "IMK"]
teamD.map((elementName, index) => {
    const element = document.createElement('div')
    element.classList.add("member-card-circle")
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      element.style.backgroundColor = getRandomColor();
      element.style.left = ((teamD.length - index -1)*10)+"%"
      element.innerHTML = elementName
      team4.appendChild(element)
})