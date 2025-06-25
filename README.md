# Shambhavi's Full Stack To-Do List Application

This is a full-stack To-Do List application built using **React** (Frontend), **Django** (Backend), and **MySQL** (Database).

It allows users to manage tasks efficiently with CRUD operations — Create, Read, Update, Delete.


# Features

- Add new tasks with title and description
- View all existing tasks
- Edit task details or update their status
- Delete tasks permanently
- Clean and responsive UI using React
- RESTful API using Django REST Framework
- Data stored in a MySQL database

# Tech Stack

- **Frontend:** React, Axios, JavaScript
- **Backend:** Django, Django REST Framework
- **Database:** MySQL
- **Version Control:** Git & GitHub
- **Deployment:** Netlify (Frontend), Render or Railway (Backend)
  

# Folder Structure

```
Shambhavi_TodoApp/
├── backend/
│   ├── todoproject/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── tasks/
│   │       ├── models.py
│   │       ├── serializers.py
│   │       └── views.py
├── frontend/
│   └── src/
│       ├── App.js
│       └── components/
│           ├── TaskForm.js
│           └── TaskList.js
└── README.md
```

#  Setup Instructions

# Backend (Django + MySQL)

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate for Windows
```

3. Install required packages:
```bash
pip install django djangorestframework mysqlclient django-cors-headers
```

4. Update `settings.py` for MySQL:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'todo_db',
        'USER': 'root',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

5. Enable CORS in settings:
```python
INSTALLED_APPS += ['corsheaders']
MIDDLEWARE.insert(0, 'corsheaders.middleware.CorsMiddleware')
CORS_ALLOW_ALL_ORIGINS = True
```

6. Run migrations and start the server:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```


#  Frontend (React)

1. Navigate to frontend:
```bash
cd frontend
```

2. Install packages:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```


#  Deployment

# Frontend (Netlify or Vercel)
- Push frontend to GitHub.
- Link to Netlify.
- Set `REACT_APP_API_URL` as an environment variable pointing to backend.

# Backend (Render or Railway)
- Push backend to GitHub.
- Create a service and link to GitHub repo.
- Set environment variables for MySQL credentials.
- Use hosted MySQL or Railway DB plugin.


# Author

**Shambhavi**  
This To-Do List App was developed as part of a full-stack development project using Django, React, and MySQL.
