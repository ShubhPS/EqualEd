        // Accessibility controls
        const highContrastCheckbox = document.getElementById('high-contrast');
        const largeTextCheckbox = document.getElementById('large-text');

        highContrastCheckbox.addEventListener('change', () => {
            document.body.classList.toggle('high-contrast');
        });

        largeTextCheckbox.addEventListener('change', () => {
            document.body.classList.toggle('large-text');
        });