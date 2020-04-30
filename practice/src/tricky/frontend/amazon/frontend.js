var createButton = function() {
  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttonContainer';
  let buttonLabel = document.createElement('div');
  buttonLabel.className = 'buttonLabel';
  let clickedSpan = document.createElement('span');
  clickedSpan.innerHTML = 'Clicked';
  buttonLabel.appendChild(clickedSpan);
  let number = document.createElement('div');
  number.className = 'number';
  number.innerHTML = 0;
  buttonLabel.appendChild(number);
  let ofTimes = document.createElement('span');
  ofTimes.innerHTML = 'times';
  buttonLabel.appendChild(ofTimes);
  buttonContainer.appendChild(buttonLabel);
  buttonContainer.onclick = () => {
    number.innerHTML = Number(number.innerHTML) + 1;
    ofTimes.innerHTML = Number(number.innerHTML) > 1 ? 'times' : 'time';
    document.getElementById('#container').appendChild(createButton());
  };
  return buttonContainer;
};

document.getElementById('#container').appendChild(createButton());
