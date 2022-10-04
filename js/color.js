const div1red = document.getElementById('div1red')
const div2yellow = document.getElementById('div2yellow')
const div3blue = document.getElementById('div3blue')
const div1bred = document.getElementById('div1bred')
const div2byellow = document.getElementById('div2byellow')
const div3bblue = document.getElementById('div3bblue')
const result = document.getElementById('result')
const rdes = document.getElementById('rdes')
const resetbtn = document.getElementById('reset')
const mixbtn = document.getElementById('mix')
var primaryColor1
var primaryColor2


function redclick() {
    if (div1red.classList.contains('activepos')) {
        div1red.classList.remove('activepos')
        div1red.classList.add('restpos')
    }
    else {
        div1red.classList.add('activepos')
        div1red.classList.remove('restpos')
        div2yellow.classList.remove('activepos')
        div3blue.classList.remove('activepos')
        primaryColor1 = "red"
    }
}
function yellowclick() {
    if (div2yellow.classList.contains('activepos')) {
        div2yellow.classList.remove('activepos')
        div2yellow.classList.add('restpos')
    }
    else {
        div2yellow.classList.add('activepos')
        div2yellow.classList.remove('restpos')
        div1red.classList.remove('activepos')
        div3blue.classList.remove('activepos')
        primaryColor1 = "yellow"
    }
}
function blueclick() {
    if (div3blue.classList.contains('activepos')) {
        div3blue.classList.remove('activepos')
        div3blue.classList.add('restpos')
    }
    else {
        div3blue.classList.add('activepos')
        div3blue.classList.remove('restpos')
        div1red.classList.remove('activepos')
        div2yellow.classList.remove('activepos')
        primaryColor1 = "blue"
    }
}
function redbclick() {
    if (div1bred.classList.contains('activepos2')) {
        div1bred.classList.remove('activepos2')
        div1bred.classList.add('restpos2')

    }
    else {
        div1bred.classList.add('activepos2')
        div1bred.classList.remove('restpos2')
        div2byellow.classList.remove('activepos2')
        div3bblue.classList.remove('activepos2')
        primaryColor2 = 'red'
    }
}
function yellowbclick() {
    if (div2byellow.classList.contains('activepos2')) {
        div2byellow.classList.remove('activepos2')
        div2byellow.classList.add('restpos2')
    }
    else {
        div2byellow.classList.add('activepos2')
        div2byellow.classList.remove('restpos2')
        div1bred.classList.remove('activepos2')
        div3bblue.classList.remove('activepos2')
        primaryColor2 = 'yellow'
    }
}
function bluebclick() {
    if (div3bblue.classList.contains('activepos2')) {
        div3bblue.classList.remove('activepos2')
        div3bblue.classList.add('restpos2')
    }
    else {
        div3bblue.classList.add('activepos2')
        div3bblue.classList.remove('restpos2')
        div1bred.classList.remove('activepos2')
        div2byellow.classList.remove('activepos2')
        primaryColor2 = 'blue'
    }
}

div1red.onclick = redclick
div2yellow.onclick = yellowclick
div3blue.onclick = blueclick
div1bred.onclick = redbclick
div2byellow.onclick = yellowbclick
div3bblue.onclick = bluebclick

function mix() {
    if (primaryColor1 == 'red' && primaryColor2 == 'red') {
        result.style.backgroundColor = '#FC4646'
        rdes.style.color = '#FC4646'
    }
    else if (primaryColor1 == 'red' && primaryColor2 == 'yellow' || primaryColor1 == 'yellow' && primaryColor2 == 'red') {
        result.style.backgroundColor = '#FE972F'
        rdes.style.color = '#FE972F'
    }
    else if (primaryColor1 == 'red' && primaryColor2 == 'blue' || primaryColor1 == 'blue' && primaryColor2 == 'red') {
        result.style.backgroundColor = '#9966A3'
        rdes.style.color = '#9966A3'
    }

    else if (primaryColor1 == 'yellow' && primaryColor2 == 'yellow') {
        result.style.backgroundColor = '#FFE818'
        rdes.style.color = '#FFE818'
    }
    else if (primaryColor1 == 'yellow' && primaryColor2 == 'blue' || primaryColor1 == 'blue' && primaryColor2 == 'yellow') {
        result.style.backgroundColor = '#9AB78C'
        rdes.style.color = '#9AB78C'
    }
    else if (primaryColor1 == 'blue' && primaryColor2 == 'blue') {
        result.style.backgroundColor = '#3586FF'
        rdes.style.color = '#3586FF'
    }
    else if (primaryColor1 == '' || primaryColor2 == '') {
        result.style.backgroundColor = 'white'
        rdes.style.color = 'black'
    }
}

mixbtn.onclick = mix

function resetfun() {
    result.style.backgroundColor = 'white'
    rdes.style.color = 'black'

    div1red.classList.remove('activepos')
    div2yellow.classList.remove('activepos')
    div3blue.classList.remove('activepos')


    div1bred.classList.remove('activepos2')
    div2byellow.classList.remove('activepos2')
    div3bblue.classList.remove('activepos2')

    primaryColor1 = 'white'
    primaryColor2 = 'white'

}

resetbtn.onclick = resetfun