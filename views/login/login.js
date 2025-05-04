  // Form submission
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');

  loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
          const response = await fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
          });

          const data = await response.json();

          if (response.ok) {
              // Store token in localStorage
              localStorage.setItem('token', data.token);
              localStorage.setItem('user', JSON.stringify(data.user));

              // Redirect based on user role
              switch (data.user.role) {
                  case 'student':
                      window.location.href = 'student-dashboard.html';
                      break;
                  case 'teacher':
                      window.location.href = 'teacher-dashboard.html';
                      break;
                  case 'admin':
                      window.location.href = 'admin.html';
                      break;
                  default:
                      window.location.href = 'index.html';
              }
          } else {
              errorMessage.textContent = data.message || 'Login failed';
          }
      } catch (error) {
          errorMessage.textContent = 'An error occurred. Please try again.';
      }
  });

  // Accessibility controls
  const highContrastCheckbox = document.getElementById('high-contrast');
  const largeTextCheckbox = document.getElementById('large-text');

  highContrastCheckbox.addEventListener('change', () => {
      document.body.classList.toggle('high-contrast');
  });

  largeTextCheckbox.addEventListener('change', () => {
      document.body.classList.toggle('large-text');
  });