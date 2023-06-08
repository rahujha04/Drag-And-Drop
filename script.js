document.addEventListener('DOMContentLoaded', () => {
    // Get references to the containers and items
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const items = document.querySelectorAll('#container1 > *');
  
    // Iterate over the items and add necessary event listeners
    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
    });
  
    // Event listener functions
    function dragStart(event) {
      // Set the data to be transferred during drag
      event.dataTransfer.setData('text/plain', event.target.id);
  
      // Add the "dragging" class to the dragged item
      event.target.classList.add('dragging');
    }
  
    container2.addEventListener('dragover', dragOver);
    container2.addEventListener('drop', drop);
  
    function dragOver(event) {
      event.preventDefault();
    }
  
    function drop(event) {
      event.preventDefault();
  
      // Get the dragged item's ID
      const itemId = event.dataTransfer.getData('text/plain');
  
      // Append the dragged item to the second container
      const item = document.getElementById(itemId);
      container2.appendChild(item);
  
      // Display a success message
      showMessage('Shifting Successful');
  
      // Remove the "dragging" class from the dragged item
      item.classList.remove('dragging');
    }
  
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetContainers);
  
    function resetContainers() {
      // Move all items back to the first container
      items.forEach(item => {
        container1.appendChild(item);
      });
  
      // Clear the second container
      container2.innerHTML = '';
    }
  
    // Function to show the message
    function showMessage(text) {
      alert(text);
    }
  });
  