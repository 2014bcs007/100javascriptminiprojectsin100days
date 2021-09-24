const header = document.getElementById('header')
const title = document.getElementById('title')
const ecerpt = document.getElementById('ecerpt')
const profile_img = document.getElementById('profile_img')
const profilename = document.getElementById('name')
const date = document.getElementById('date')

const animatedbg = document.querySelector('.animated-bg')
const animatedbgtext = document.querySelector('.animated-bg-text')

setTimeout(getData, 1500)

function getData(){
    header.innerHTML=`
    <img src="img/elephants.jpg"  alt="Niwaha Barnabas" />
    `
    title.innerHTML=`
    Mountain gorilla day
    `
    ecerpt.innerHTML=`
    Mountain goriilas are very nice creatures, The gorilla story coming Soon
    `
    profile_img.innerHTML=`
    <img src="img/gorilla.jpg"  alt="Simon Kwikiriza" />
    `
    profilename.innerHTML=`
    Mountain Gorilla Uganda
    `
    date.innerHTML=`
    24th Sept 2021
    `
    animatedbg.forEach(bg=>bg.classList.remove('animated-bg'))
    animatedbgtext.forEach(bg=>bg.classList.remove('animated-bg-text'))


}

