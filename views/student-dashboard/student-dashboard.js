 // Sample data for demonstration
 const userData = {
    name: 'John',
    progress: 75,
    courses: [
        {
            title: 'Adaptive Mathematics',
            progress: 60,
            image: 'Math Course'
        },
        {
            title: 'Accessible Science Lab',
            progress: 45,
            image: 'Science Course'
        },
        {
            title: 'Interactive Literature',
            progress: 30,
            image: 'Literature Course'
        }
    ],
    assignments: [
        {
            title: 'Math Quiz: Algebra Basics',
            dueDate: '2024-03-20'
        },
        {
            title: 'Science Lab Report',
            dueDate: '2024-03-22'
        },
        {
            title: 'Literature Essay',
            dueDate: '2024-03-25'
        }
    ],
    resources: [
        {
            title: 'Study Guide: Algebra',
            type: 'PDF Document',
            icon: '📚'
        },
        {
            title: 'Video Tutorial: Science Lab',
            type: 'Video',
            icon: '🎥'
        },
        {
            title: 'Interactive Quiz: Literature',
            type: 'Interactive',
            icon: '🎮'
        }
    ]
};

// Update dashboard with user data
document.querySelector('.dashboard-header h1').textContent = `Welcome, ${userData.name}!`;
document.querySelector('.progress-fill').style.width = `${userData.progress}%`;
document.querySelector('.card p').textContent = `${userData.progress}% of your learning goals completed`;
