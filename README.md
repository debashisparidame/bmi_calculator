# BMI Calculator 🧮

<div align="center">

![BMI Calculator Hero](https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)

_A modern, responsive BMI (Body Mass Index) calculator built with React and Vite. This application allows users to calculate their BMI and receive health category feedback based on medical standards._

![BMI Calculator](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

## ✨ Features

<div align="center">

![Features](https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80)

</div>

- **🎯 Accurate BMI Calculation**: Uses the standard BMI formula with proper conversion for pounds/inches
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful gradient background with clean, professional styling
- **✅ Input Validation**: Prevents invalid inputs and provides user-friendly error messages
- **🏥 Health Categories**: Provides medically accurate BMI category classifications
- **🔄 Quick Reset**: Easy-to-use reload functionality to clear all inputs
- **♿ Accessible**: Proper form labels and focus states for better accessibility

## 🏥 BMI Categories

<div align="center">

![BMI Chart](https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80)

</div>

The calculator provides results based on standard medical BMI categories:

| BMI Range   | Category       | Color Indicator |
| ----------- | -------------- | --------------- |
| < 18.5      | Underweight    | ⚪              |
| 18.5 - 24.9 | Healthy Weight | 🟢              |
| 25.0 - 29.9 | Overweight     | 🟡              |
| ≥ 30.0      | Obese          | 🔴              |

## 🚀 Demo

<div align="center">

![App Screenshot](https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80)

🌐 **Live Demo**: [BMI Calculator](https://bmi-calculator-blue-iota.vercel.app/)

_Also available locally at `http://localhost:5174` when running the development server_

</div>

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/debashisparidame/bmi_calculator.git
   cd bmi_calculator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📁 Project Structure

```
bmi_calculator/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg           # React logo
│   ├── App.css                 # Application styles
│   ├── App.jsx                 # Main component
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Project dependencies
├── README.md                   # Project documentation
└── vite.config.js              # Vite configuration
```

## 🧮 How It Works

### BMI Calculation Formula

```javascript
BMI = (weight in pounds / (height in inches)²) × 703
```

### Key Components

**State Management:**

- `weight`: User's weight in pounds
- `height`: User's height in inches
- `bmi`: Calculated BMI value
- `message`: Health category message

**Main Functions:**

- `calcBmi()`: Calculates BMI and determines health category
- `reload()`: Resets all form fields and results

## 🎨 Styling Features

- **Gradient Background**: Modern purple-to-blue gradient
- **Card Design**: Clean white container with rounded corners and shadows
- **Interactive Elements**: Hover effects and focus states
- **Responsive Layout**: Mobile-first design approach
- **Typography**: Clean, readable fonts with proper hierarchy

## 📱 Usage

1. **Enter Weight**: Input your weight in pounds (lbs)
2. **Enter Height**: Input your height in inches (in)
3. **Calculate**: Click the "Submit" button to calculate your BMI
4. **View Results**: See your BMI value and health category
5. **Reset**: Click "Reload" to clear all fields and start over

## 🛠️ Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Starts development server    |
| `npm run build`   | Creates production build     |
| `npm run lint`    | Runs ESLint for code quality |
| `npm run preview` | Previews production build    |

## 🔧 Technologies Used

<div align="center">

![Tech Stack](https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80)

</div>

### Core Framework

- **React 19.1.1**: Modern React with latest features
- **Vite 7.1.7**: Fast build tool and development server

### Development Tools

- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization

### Styling

- **Pure CSS**: Custom styles with modern CSS features
- **Flexbox**: Responsive layout system
- **CSS Grid**: Advanced layout capabilities

## 🌟 Key Features Implementation

### Input Validation

```javascript
if (weight === "" || height === "" || weight <= 0 || height <= 0) {
  alert("Please enter valid weight and height values.");
}
```

### BMI Categorization

```javascript
if (bmiValue < 18.5) {
  setMessage("You are underweight");
} else if (bmiValue >= 18.5 && bmiValue < 25) {
  setMessage("You have a healthy weight");
} else if (bmiValue >= 25 && bmiValue < 30) {
  setMessage("You are overweight");
} else {
  setMessage("You are obese");
}
```

## 🔮 Future Enhancements

- [ ] **Metric System Support**: Add kg/cm input options
- [ ] **BMI History**: Track and display calculation history
- [ ] **Health Tips**: Provide personalized health recommendations
- [ ] **Charts & Graphs**: Visual BMI representation
- [ ] **User Profiles**: Save user data and preferences
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Export Results**: Download or share BMI results

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Debashis Paridame**

- GitHub: [@debashisparidame](https://github.com/debashisparidame)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Medical standards for BMI categorization
- Community feedback and contributions

---

⭐ **If you found this project helpful, please give it a star!** ⭐
