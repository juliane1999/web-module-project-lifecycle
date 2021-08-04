import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

const entryPoint = document.querySelector('.cards')
axios.get('https://api.github.com/users/juliane1999')
.then(res => {
  console.log(res.data)
  const newCard = gitCard(res.data)
  console.log(newCard)
  return newCard
})
.then(newCard => {
  entryPoint.appendChild(newCard)
})
.catch(err => console.log(err.message))
.finally(() => console.log('done'))



const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(item => {
cardsFromArray(item)
})

function cardsFromArray(user){
axios.get(`https://api.github.com/users/${user}`)
.then(res => {
  console.log(res.data)
  const newCard = gitCard(res.data)
  console.log(newCard)
  return newCard
})
.then(newCard => {
  entryPoint.appendChild(newCard)
})
.catch(err => console.log(err.message))
.finally(() => console.log('done'))
}



function gitCard ({avatar_url, name, login, location, html_url, followers, following, bio}) {
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardDiv = document.createElement('div')
  const nameH3 = document.createElement('h3')
  const username = document.createElement('p')
  const locationP = document.createElement('p')
  const profileP = document.createElement('p')
  const url = document.createElement('a')
  const followersP = document.createElement('p')
  const followingP = document.createElement('p')
  const bioP = document.createElement('p')

  nameH3.textContent = `${name}`
  username.textContent = `${login}`
  locationP.textContent = `Location: ${location}`
  profileP.textContent = `Profile:`
  url.textContent = html_url
  followersP.textContent = `Followers: ${followers}`
  followingP.textContent = `Following: ${following}`
  bioP.textContent = `Bio: ${bio}`
  
  img.src = avatar_url
  url.href = html_url

  card.appendChild(img)
  card.appendChild(cardDiv)
  cardDiv.appendChild(nameH3)
  cardDiv.appendChild(username)
  cardDiv.appendChild(locationP)
  cardDiv.appendChild(profileP)
  cardDiv.appendChild(followersP)
  cardDiv.appendChild(followingP)
  cardDiv.appendChild(bioP)
  profileP.appendChild(url)

  card.classList.add('card')
  cardDiv.classList.add('card-info')
  nameH3.classList.add('name')
  username.classList.add('username')

    return card;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


