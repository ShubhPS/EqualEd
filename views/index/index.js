 // Mobile menu functionality
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const navLinks = document.querySelector('.nav-links');
 const ctaButtons = document.querySelector('.cta-buttons');

 mobileMenuBtn.addEventListener('click', () => {
     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
     ctaButtons.style.display = ctaButtons.style.display === 'flex' ? 'none' : 'flex';
 });

 // Accessibility controls
 const highContrastCheckbox = document.getElementById('high-contrast');
 const largeTextCheckbox = document.getElementById('large-text');
 const textToSpeechBtn = document.getElementById('text-to-speech');
 const fontSelect = document.getElementById('font-select');

 // High contrast mode
 highContrastCheckbox.addEventListener('change', () => {
     document.body.classList.toggle('high-contrast');
 });

 // Large text mode
 largeTextCheckbox.addEventListener('change', () => {
     document.body.classList.toggle('large-text');
 });

 // Text to speech
 let speechSynthesis = window.speechSynthesis;
 let speaking = false;

 textToSpeechBtn.addEventListener('click', () => {
     if (speaking) {
         speechSynthesis.cancel();
         speaking = false;
         textToSpeechBtn.textContent = 'Text to Speech';
         return;
     }

     const text = document.querySelector('main').textContent;
     const utterance = new SpeechSynthesisUtterance(text);
     utterance.onend = () => {
         speaking = false;
         textToSpeechBtn.textContent = 'Text to Speech';
     };
     speechSynthesis.speak(utterance);
     speaking = true;
     textToSpeechBtn.textContent = 'Stop Speaking';
 });

 // Font selection
 fontSelect.addEventListener('change', () => {
     document.body.style.fontFamily = fontSelect.value;
 });

 // Responsive design adjustments
 function handleResize() {
     if (window.innerWidth > 768) {
         navLinks.style.display = 'flex';
         ctaButtons.style.display = 'flex';
     } else {
         navLinks.style.display = 'none';
         ctaButtons.style.display = 'none';
     }
 }

 window.addEventListener('resize', handleResize);
 handleResize(); // Initial call