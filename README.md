
# Student App

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Run Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt

python app.py
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/student-app.git
git push -u origin main
```
