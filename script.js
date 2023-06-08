document.addEventListener('DOMContentLoaded', () => {
    // Here I am Geting references to the containers and items
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const items = document.querySelectorAll('#container1 > *');
  
    // Here I am Iterating over the items and add necessary event listeners
    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
    });
  
    // Here I am adding Event listener functions
    function dragStart(event) {
      // Here I am Seting the data to be transferred during drag
      event.dataTransfer.setData('text/plain', event.target.id);
  
      // Here I am Adding the "dragging" class to the dragged item
      event.target.classList.add('dragging');
    }
  
    container2.addEventListener('dragover', dragOver);
    container2.addEventListener('drop', drop);
  
    function dragOver(event) {
      event.preventDefault();
    }
  
    function drop(event) {
      event.preventDefault();
  
      // Here I am Geting the dragged item's ID
      const itemId = event.dataTransfer.getData('text/plain');
  
      // Here I am Appending the dragged item to the second container
      const item = document.getElementById(itemId);
      container2.appendChild(item);
  
      // Here I am Displaying a success message
      showMessage('Shifting Successful');
  
      // Here I am Removing the "dragging" class from the dragged item
      item.classList.remove('dragging');
    }
  
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetContainers);
  
    function resetContainers() {
      // Here I am Moving all items back to the first container
      items.forEach(item => {
        container1.appendChild(item);
      });
  
      // Here I am Clearing the second container
      container2.innerHTML = '';
    }
  
    // This Function is to show the message
    function showMessage(text) {
      alert(text);
    }
  });
  