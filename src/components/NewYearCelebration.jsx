import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const isNewYear = () => {
    const now = new Date();

    return now.getMonth() === 0 && now.getDate() === 1;
};

export const triggerNewYearConfetti = () => {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

const NewYearCelebration = () => {
    useEffect(() => {
        if (!isNewYear()) return;
        triggerNewYearConfetti();
    }, []);

    return null; 
};

export default NewYearCelebration;
