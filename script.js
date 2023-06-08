document.addEventListener('DOMContentLoaded', () => {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');
  const items = document.querySelectorAll('#container1 > *');

  items.forEach(item => {
    item.addEventListener('mousedown', dragStart);
    item.addEventListener('touchstart', dragStart, { passive: false });
  });

  let selectedItemId = null;

  function dragStart(event) {
    event.preventDefault();

    selectedItemId = event.target.id;

    if (event.type === 'touchstart') {
      event.target.addEventListener('touchmove', touchMove, { passive: false });
      event.target.addEventListener('touchend', touchEnd);
    } else {
      event.target.addEventListener('mousemove', mouseMove);
      event.target.addEventListener('mouseup', mouseUp);
      event.target.style.border = '2px dashed #4C43CD'; // Change the border color
    }
  }

  function mouseMove(event) {
    event.preventDefault();
  }

  function touchMove(event) {
    event.preventDefault();
  }

  function mouseUp(event) {
    const itemId = event.target.id;

    if (selectedItemId === itemId) {
      const item = document.getElementById(itemId);
      container2.appendChild(item);
      item.classList.remove('dragging');
      item.style.border = 'none'; // Remove the border color

      showMessage('Shifting Successful');
    }

    selectedItemId = null;

    event.target.removeEventListener('mousemove', mouseMove);
    event.target.removeEventListener('mouseup', mouseUp);
  }

  function touchEnd(event) {
    const itemId = event.target.id;

    if (selectedItemId === itemId) {
      const item = document.getElementById(itemId);
      container2.appendChild(item);
      item.classList.remove('dragging');
      item.style.border = 'none'; // Remove the border color

      showMessage('Shifting Successful');
    }

    selectedItemId = null;

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
      item.style.border = 'none'; // Remove the border color
    });

    container2.innerHTML = '';
  }
  function showMessage(text) {
    alert(text);
  }
  
  
});
