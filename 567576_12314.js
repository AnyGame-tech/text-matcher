// Display the custom alert on page load
window.onload = function() {
    document.getElementById('alertModal').style.display = 'block';
    setTimeout(function() {
      document.getElementById('alertModal').style.display = 'none';
    }, 5000); // Alert will disappear after 5 seconds
  };
  
  const inputText = document.getElementById('inputText');
  const popup = document.getElementById('popup');
  const errorPopup = document.getElementById('errorPopup');
  const targetText = 'elliot';  
  
  document.getElementById('textForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (inputText.value.toLowerCase() === targetText) {
      popup.style.display = 'block';
      errorPopup.style.display = 'none';
      setTimeout(() => popup.style.display = 'none', 3000);
    } else {
      errorPopup.style.display = 'block';
      popup.style.display = 'none';
      setTimeout(() => errorPopup.style.display = 'none', 3000);
    }
  });
  
  let devtoolsOpen = false;
  
  const threshold = 160;
  const checkDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    devtoolsOpen = widthThreshold || heightThreshold;
    if (devtoolsOpen) {
      alert("Please do not use developer tools!");
    }
  };
  
  setInterval(checkDevTools, 1000);    
  
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // Prevent right-click context menu
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();  // Prevent opening developer tools
    }
  });
  