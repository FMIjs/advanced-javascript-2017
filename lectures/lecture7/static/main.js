; (function () {
  const ul = document.getElementById('user-list');
  const addUserBtn = document.getElementById('add-user');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');

  addUserBtn.addEventListener('click', function () {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    fetch('/api/user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName
      })
    }).then(resp => {
      const li = document.createElement('li');
      li.innerText = `${firstName} ${lastName}`;
      ul.appendChild(li);

      firstNameInput.value = '';
      lastNameInput.value = '';
    }).catch(e => {
      alert('Server error!');
    });
  });

  function domContentLoadedCb(event) {
    console.log('Dom content is loaded!');
    // we can remove an event listeners (this is not necessary in the current case because our cb will be called only once)
    // document.removeEventListener('DOMContentLoaded', domContentLoadedCb);
  }

  // add event listener that will call our callback after the DOM Content is loaded
  document.addEventListener('DOMContentLoaded', domContentLoadedCb);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      parseData(xhr.responseText);
    }
  }

  xhr.open('GET', '/api/users', true);
  xhr.send(null);

  parseData = (str) => {
    const arr = JSON.parse(str);
    arr.forEach(usr => {
      const li = document.createElement('li');
      li.innerText = `${usr.firstName} ${usr.lastName}`;
      ul.appendChild(li);
    });
  };
}());