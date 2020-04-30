(() => {
  const state = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  };

  const checkAll = value => {
    Object.keys(state).forEach(checkbox => {
      state[checkbox] = value;
    });
  };

  const redraw = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let checkbox of checkboxes) {
      checkbox.checked = state[checkbox.id];
    }
    const checkboxValues = Object.values(state);
    if (checkboxValues.every(v => v)) {
      document.querySelector('#selectAll').checked = true;
    }
    if (checkboxValues.every(v => v === false)) {
      document.querySelector('#unselectAll').checked = true;
    }
  };

  document.querySelector('.checkboxContainer').addEventListener('click', e => {
    if (e.target.id === 'selectAll') {
      checkAll(true);
    } else if (e.target.id === 'unselectAll') {
      checkAll(false);
    } else {
      state[e.target.id] = !state[e.target.id];
    }
    redraw();
  });
  redraw();
})();
