// Function to update scroll progress
function updateProgress() {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    
    // Calculate scroll progress
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    // Update progress bar height
    progressBar.style.height = `${progress}%`;
    
    // Update progress text
    progressText.textContent = `Progress: ${Math.round(progress)}%`;
}

// Add progress bar to the page
function addProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    
    const progressText = document.createElement('div');
    progressText.className = 'progress-text';
    progressText.textContent = 'Progress';
    
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressText);
    document.body.appendChild(progressContainer);
    
    // Update progress bar on scroll
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.height = progress + '%';
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', addProgressBar); 