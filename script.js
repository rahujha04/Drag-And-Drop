document.addEventListener('DOMContentLoaded', () => {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');
  const items = document.querySelectorAll('#container1 > *');

  items.forEach(item => {
    item.addEventListener('mousedown', dragStart);
    item.addEventListener('touchstart', dragStart, { passive: false });
  });

  function dragStart(event) {
    event.preventDefault();

    const itemId = event.target.id;

    if (event.type === 'touchstart') {
      event.target.addEventListener('touchmove', touchMove, { passive: false });
      event.target.addEventListener('touchend', touchEnd);
    } else {
      event.target.addEventListener('mousemove', mouseMove);
      event.target.addEventListener('mouseup', mouseUp);
    }

    event.dataTransfer.setData('text/plain', itemId);
    event.target.classList.add('dragging');
  }

  function mouseMove(event) {
    event.preventDefault();
  }

  function touchMove(event) {
    event.preventDefault();
  }

  function mouseUp(event) {
    const itemId = event.target.id;
    const item = document.getElementById(itemId);

    container2.appendChild(item);
    item.classList.remove('dragging');

    showMessage('Shifting Successful');

    event.target.removeEventListener('mousemove', mouseMove);
    event.target.removeEventListener('mouseup', mouseUp);
  }

  function touchEnd(event) {
    const itemId = event.target.id;
    const item = document.getElementById(itemId);

    container2.appendChild(item);
    item.classList.remove('dragging');

    showMessage('Shifting Successful');

    event.target.removeEventListener('touchmove', touchMove);
    event.target.removeEventListener('touchend', touchEnd);
  }

  container2.addEventListener('dragover', dragOver);
  container2.addEventListener('drop', drop);

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
  }

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', resetContainers);

  function resetContainers() {
    items.forEach(item => {
      container1.appendChild(item);
    });

    container2.innerHTML = '';
  }

  function showMessage(text) {
    alert(text);
  }
});
