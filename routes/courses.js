const express = require('express');
const router = express.Router();

// Sample course data (in a real application, this would come from a database)
const courses = [
    {
        id: 1,
        title: "Adaptive Mathematics",
        subject: "math",
        gradeLevel: "middle",
        format: "interactive",
        description: "Experience mathematics through interactive, visual, and auditory learning modules that adapt to your preferred learning style.",
        tags: ["Mathematics", "Interactive", "Adaptive"],
        image: "math-course.jpg"
    },
    {
        id: 2,
        title: "Accessible Science Lab",
        subject: "science",
        gradeLevel: "high",
        format: "interactive",
        description: "Explore scientific concepts through simulations and experiments designed to be accessible for all types of learners.",
        tags: ["Science", "Virtual Lab", "Interactive"],
        image: "science-course.jpg"
    },
    {
        id: 3,
        title: "Interactive Literature",
        subject: "language",
        gradeLevel: "all",
        format: "multi-format",
        description: "Engage with classic and contemporary literature through text, audio, visual summaries, and interactive discussions.",
        tags: ["Language Arts", "Multi-format", "Interactive"],
        image: "literature-course.jpg"
    },
    {
        id: 4,
        title: "Inclusive Coding",
        subject: "computer-science",
        gradeLevel: "middle",
        format: "project-based",
        description: "Learn programming through accessible exercises with multiple input methods and adaptive challenges.",
        tags: ["Computer Science", "Project-based", "Adaptive"],
        image: "coding-course.jpg"
    }
];

// Get all courses
router.get('/', (req, res) => {
    res.json(courses);
});

// Get course by ID
router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
});

// Filter courses
router.get('/filter', (req, res) => {
    const { subject, gradeLevel, format } = req.query;
    
    let filteredCourses = [...courses];
    
    if (subject) {
        filteredCourses = filteredCourses.filter(course => course.subject === subject);
    }
    
    if (gradeLevel) {
        filteredCourses = filteredCourses.filter(course => course.gradeLevel === gradeLevel);
    }
    
    if (format) {
        filteredCourses = filteredCourses.filter(course => course.format === format);
    }
    
    res.json(filteredCourses);
});

// Search courses
router.get('/search', (req, res) => {
    const { query } = req.query;
    
    if (!query) {
        return res.json(courses);
    }
    
    const searchResults = courses.filter(course => 
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    res.json(searchResults);
});

module.exports = router; 