if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/terminal-portfolio/sw.js', { scope: '/terminal-portfolio/' })})}