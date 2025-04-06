# 🥗 Daily Tracker

**Daily Tracker** is a calorie-tracking web application that allows users to log foods and monitor their daily nutritional intake. It integrates with the **Nutritionix API** to provide accurate, real-time nutrition data and is built with **React** and **Redux-Saga** for efficient state and side-effect management. The app is deployed on **AWS Elastic Beanstalk** for scalability and performance.

---

## 🚀 Features

- Search and log food items with real-time nutrition info
- Automatically fetch calorie, fat, protein, and carb data
- Track daily intake and total calories
- Responsive and mobile-friendly UI
- Efficient state management with Redux + Sagas
- Deployed on AWS Elastic Beanstalk

---

## 🛠 Tech Stack

- **Frontend:** React
- **State Management:** Redux + Redux-Saga
- **API Integration:** Nutritionix API
- **Deployment:** AWS Elastic Beanstalk

---

## 📦 Installation

```bash
git clone https://github.com/bhprtk/daily-tracker.git
cd daily-tracker
npm install
```

---

## ⚙️ Usage

To start the development server:

```bash
npm start
```

Open your browser and go to:

```
http://localhost:3000
```

You will need to set up a `.env` file with your **Nutritionix API keys**:

```
REACT_APP_NUTRITIONIX_APP_ID=your_app_id
REACT_APP_NUTRITIONIX_APP_KEY=your_app_key
```

---

## 📡 API Info

- Uses the [Nutritionix API](https://www.nutritionix.com/business/api) to fetch food and nutrition data.
- Supports both brand and common food entries.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

Built by [Pratik Bhandari](https://bhprtk.com)

---
