# resume-builder-application
Unified Resume Builder is a full-stack application that allows users to create and analyze resumes.It combines Resume-Builder (Frontend) and AI-Resume-Analyzer (Backend) to provide resume-building templates and AI-powered resume analysis.

🚀 Features

    Create resumes using customizable templates.

    AI-based resume analysis with keyword extraction and scoring.

    PDF download functionality for resumes.

    User-friendly UI with Chakra UI for styling.

    Secure backend with Python (Flask/FastAPI) and database support.

📂 Project Structure

    Unified-Resume-Builder/

    │── Backend/  (AI-Resume-Analyzer)

    │── Frontend/ (Resume-Builder)

    │── README.md

->Frontend (React + Chakra UI)

    Provides a UI for users to input resume data and generate a professional resume.
    
    Uses React Router for navigation.
    
    Includes resume templates and form validation.

->Backend (Python + NLP)

    Extracts relevant keywords from resumes.
    
    Stores user details in a database (MySQL).
    
    Provides AI-based recommendations.

⚙️ Installation & Setup

    Follow these steps to set up the project on your local machine.

🖥️ 1. Clone the Repository

    git clone https://github.com/sandeep4358d/resume-builder-application.git
    
    cd Unified-Resume-Builder

🌐 2. Run the Frontend (React)

Make sure you have Node.js installed.
    
    cd Frontend
      
    npm install
      
    npm start

The React app should now be running on http://localhost:3000

🖥 3. Run the Backend (Python)

Ensure you have Python 3.x and MySQL installed.
    cd Backend
    
    pip install -r requirements.txt
    
    python app.py
  
The backend should be running on http://localhost:5000

🛠️ Tech Stack
    Frontend: React.js, Chakra UI, React Router

    Backend: Python, Flask/FastAPI, NLP (NLTK, spaCy)

    Database: MySQL

    Other Libraries: Pandas, PyResparser, PDFMiner

🐜 Contributing

    Feel free to submit issues and pull requests. Contributions are always welcome!

    Fork the repository

    Create a new branch (git checkout -b feature-name)

    Commit changes (git commit -m 'Added new feature')

    Push the branch (git push origin feature-name)

    Submit a pull request

📝 License

    This project is licensed under the MIT License - see the LICENSE file for details.

🎯 Contact & Support

    If you have any questions, feel free to reach out!📧 Email: sandeepdasari2004@gmail.com🔗 GitHub: sandeep4358d
