const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=60')
    .then(response => response.json())
    .then(data => showFriends(data))
}
loadBuddies();
const showFriends = data => {
    const getResults = data.results;
    console.log(getResults)
    const getFriend = document.getElementById('friends');
    for( const friend of getResults){
        const h3 = document.createElement('h3');
        h3.innerText = `Name: ${friend.name.title} ${friend.name.first} ${friend.name.last}`;
        getFriend.appendChild(h3);
        const h5 = document.createElement('h5');
        h5.innerText = `Gender: ${friend.gender}`;
        getFriend.appendChild(h5);
        const p = document.createElement('p');
        p.innerText = `Phone: ${friend.phone}`;
        getFriend.appendChild(p);
    }
}