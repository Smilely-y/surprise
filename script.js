body {
  margin: 0;
  font-family: 'Comic Sans MS', cursive;
  background: linear-gradient(180deg, #ff9a9e, #fad0c4);
  overflow-x: hidden;
}

.section {
  min-height: 100vh;
  padding: 80px 20px;
  text-align: center;
  color: #6a1b2b;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2.2em;
}

p {
  font-size: 1.3em;
  line-height: 1.6;
}

.small {
  font-size: 0.9em;
  opacity: 0.8;
}

/* Gallery */
.gallery {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.gallery img {
  width: 180px;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* Buttons */
.buttons {
  margin-top: 30px;
}

button {
  padding: 15px 30px;
  font-size: 1.2em;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin: 10px;
}

.yes {
  background: #ff4d6d;
  color: white;
}

.no {
  background: #adb5bd;
  color: white;
}

/* Floating Hearts */
.hearts span {
  position: fixed;
  bottom: -20px;
  font-size: 20px;
  animation: floatUp 6s linear infinite;
}

@keyframes floatUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}
