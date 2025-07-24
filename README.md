# 📸 GSAP ScrollTrigger 3D Image Slider

This project is a visually engaging 3D scrolling image slider built using **GSAP** and the **ScrollTrigger** plugin. As users scroll through the page, images and slides transition in 3D space with smooth animations and blur-based background effects, creating a cinematic web experience.

---

## 🚀 Features

- 🎯 GSAP ScrollTrigger-powered 3D scroll animations  
- 📦 Dynamic Z-axis slide transitions based on scroll position  
- ✨ Smooth image fade-in/out effects  
- 🌫️ Blurry background images that enhance depth and visual impact  
- 📱 Fully responsive layout  
- 🎨 Clean and modern UI with customizable styling  

---

## 📁 Project Structure

gsap-3d-scroll-slider/
├── index.html # HTML structure
├── style.css # Styling for layout and visuals
└── script.js # Core logic and animation using GSAP

---

## 🛠️ Technologies Used

- **HTML5 / CSS3**
- **JavaScript 

---

## 🧩 How It Works

- Each `.slide` element is placed along the Z-axis using `translateZ()` to simulate depth.
- The `ScrollTrigger` plugin listens to scroll progress and updates each slide's position and opacity in real-time.
- Background images inside the `.active` container fade in/out and blur depending on their scroll position.
- Scroll depth and transition smoothness can be tweaked using the `zSpacing` variable in `script.js`.

---

## 📌 Customization

- 🧮 Change `zSpacing` value to increase or decrease scroll speed.
- 🖼️ Add more slides in `index.html` to extend the scroll journey.
- 🎨 Modify styles in `style.css` for a new look and theme.

---


## 🙌 Acknowledgements

- [GSAP by GreenSock](https://greensock.com/gsap/)
- ScrollTrigger plugin documentation
- Inspired by advanced scroll effects seen in modern creative portfolios.
