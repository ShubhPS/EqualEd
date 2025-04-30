let users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        role: 'student',
        learningNeeds: ['dyslexia'],
        status: 'active',
        createdAt: '2024-03-15'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        role: 'teacher',
        learningNeeds: [],
        status: 'active',
        createdAt: '2024-03-14'
    }
];

// Function to update statistics
function updateStats() {
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('activeUsers').textContent = users.filter(user => user.status === 'active').length;
    document.getElementById('newUsers').textContent = users.filter(user => {
        const today = new Date().toISOString().split('T')[0];
        return user.createdAt === today;
    }).length;
    document.getElementById('students').textContent = users.filter(user => user.role === 'student').length;
}

// Function to render user table
function renderUsers(filteredUsers = users) {
    const tableBody = document.getElementById('usersTableBody');
    tableBody.innerHTML = '';

    filteredUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.firstName} ${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.learningNeeds.join(', ') || 'None'}</td>
            <td>${user.status}</td>
            <td>
                <button class="btn btn-primary" onclick="editUser(${user.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm) ||
        user.lastName.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    );
    renderUsers(filteredUsers);
});

// Filter functionality
document.getElementById('roleFilter').addEventListener('change', filterUsers);
document.getElementById('statusFilter').addEventListener('change', filterUsers);

function filterUsers() {
    const roleFilter = document.getElementById('roleFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    let filteredUsers = users;

    if (roleFilter) {
        filteredUsers = filteredUsers.filter(user => user.role === roleFilter);
    }

    if (statusFilter) {
        filteredUsers = filteredUsers.filter(user => user.status === statusFilter);
    }

    if (searchTerm) {
        filteredUsers = filteredUsers.filter(user =>
            user.firstName.toLowerCase().includes(searchTerm) ||
            user.lastName.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)
        );
    }

    renderUsers(filteredUsers);
}

// User management functions
function editUser(id) {
    // Implement edit functionality
    console.log('Edit user:', id);
}

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        users = users.filter(user => user.id !== id);
        updateStats();
        renderUsers();
    }
}

// Initialize the dashboard
updateStats();
renderUsers();