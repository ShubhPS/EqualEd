// Get the checkboxes and font selector
const highContrastCheckbox = document.getElementById('high-contrast');
const largeTextCheckbox = document.getElementById('large-text');
const fontSelect = document.getElementById('font-select');

// Add OpenDyslexic font
const openDyslexicFont = new FontFace('OpenDyslexic', 'url(https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.otf)');
openDyslexicFont.load().then(function(loadedFace) {
    document.fonts.add(loadedFace);
}).catch(function(error) {
    console.error('Font loading failed:', error);
});

// Function to load saved preferences
function loadAccessibilityPreferences() {
    const highContrast = localStorage.getItem('highContrast') === 'true';
    const largeText = localStorage.getItem('largeText') === 'true';
    const selectedFont = localStorage.getItem('selectedFont');

    // Apply saved preferences
    if (highContrast) {
        document.body.classList.add('high-contrast');
        highContrastCheckbox.checked = true;
    }

    if (largeText) {
        document.body.classList.add('large-text');
        largeTextCheckbox.checked = true;
    }

    if (selectedFont) {
        document.body.style.fontFamily = selectedFont;
        if (fontSelect) {
            fontSelect.value = selectedFont;
        }
    }
}

// Function to save preferences
function saveAccessibilityPreferences() {
    localStorage.setItem('highContrast', highContrastCheckbox.checked);
    localStorage.setItem('largeText', largeTextCheckbox.checked);
    if (fontSelect) {
        localStorage.setItem('selectedFont', fontSelect.value);
    }
}

// Add event listeners
highContrastCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('high-contrast');
    saveAccessibilityPreferences();
});

largeTextCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('large-text');
    saveAccessibilityPreferences();
});

if (fontSelect) {
    fontSelect.addEventListener('change', () => {
        document.body.style.fontFamily = fontSelect.value;
        saveAccessibilityPreferences();
    });
}

// Load preferences when the page loads
document.addEventListener('DOMContentLoaded', loadAccessibilityPreferences); 