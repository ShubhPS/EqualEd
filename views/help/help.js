 // FAQ Toggle functionality
 document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        const toggleIcon = question.querySelector('.toggle-icon');
        toggleIcon.textContent = faqItem.classList.contains('active') ? '-' : '+';
    });
});

// Search functionality
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});