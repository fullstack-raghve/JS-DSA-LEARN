//LocalStorage set expiration time

//LocalStorage is permanently stored, but if it is stored too much, it will affect the client, so set the expiration time when storing

//Simulation scenario: get the name object from localStorage and alert it

//First: define the function to store localStorage

function store(key, value, expire) {
  let obj = {
    time: new Date().getTime(),
    value: value,
    expire: expire,
  }
  // You can only store strings
  let objStr = JSON.stringify(obj);
  localStorage.setItem(key, objStr);
}
//Save name

//Store name, the name is 'project-info', and the expiration time is 5000 milliseconds
store('name', 'project-info', 5000);
//Set a timer to continuously detect whether it expires, if it expires, the name of /localStorage is clear

var timer = setInterval(function() {
  if (localStorage.getItem('name')) {
    var name = localStorage.getItem('name');
    var nameObj = JSON.parse(name);
    console.log(new Date().getTime() - nameObj.time);
    if (new Date().getTime() - nameObj.time >= nameObj.expire) {
      localStorage.removeItem('name')
    }
  } else {
    alert('localStorage has expired');
    clearInterval(timer);
  }
}, 1000)
//The saved name ‘project-info’ is deleted after 5 seconds