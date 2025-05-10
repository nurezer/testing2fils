// Create snowfall effect
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.style.position = 'absolute';
    snowflake.style.width = '8px';
    snowflake.style.height = '8px';
    snowflake.style.background = 'white';
    snowflake.style.borderRadius = '50%';
    snowflake.style.pointerEvents = 'none';
    snowflake.style.opacity = Math.random();
    
    // Random starting position
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = '-10px';
    
    document.querySelector('.snowfall').appendChild(snowflake);
    
    // Animate snowflake
    let angle = 0;
    const animationDuration = 5000 + Math.random() * 5000;
    const startTime = Date.now();
    
    function animate() {
        const progress = (Date.now() - startTime) / animationDuration;
        if (progress >= 1) {
            snowflake.remove();
            return;
        }
        
        const top = progress * window.innerHeight;
        angle += 0.02;
        const left = parseFloat(snowflake.style.left) + Math.sin(angle) * 2;
        
        snowflake.style.transform = `translate(${Math.sin(angle) * 10}px, ${top}px)`;
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Create snowflakes periodically
setInterval(createSnowflake, 100); 