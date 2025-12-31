import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const isNewYear = () => {
    const now = new Date();
    // Check if it is January 1st
    // Check if it is January 1st
    return now.getMonth() === 0 && now.getDate() === 1;
    // return true; // TESTING MODE: Always show effect
};

export const triggerNewYearConfetti = () => {
    // The duration of the confetti loop in milliseconds
    const duration = 15 * 1000;
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

        // Since particles fall down, start a bit higher than random
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

    return null; // This component doesn't render DOM elements, just effects
};

export default NewYearCelebration;
