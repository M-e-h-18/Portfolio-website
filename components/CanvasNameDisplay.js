"use client";
import React, { useRef, useEffect } from 'react';

const CanvasNameDisplay = ({ delay = 0 }) => {
  const canvasRef = useRef(null);
  const ballRef = useRef({
    y: 0,
    dy: 2,
    ballRadius: 10,
    moveUp: false,
  });

  const rectHeightRef = useRef(0);
  const rectGrowing = useRef(true);
  const rectRadius = 10; 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const rectWidth = 25;

    const draw = () => {
      const { y, dy, ballRadius, moveUp } = ballRef.current;
      const rectX = width / 2 - rectWidth / 2;
      const rectY = height - rectHeightRef.current;

      ctx.clearRect(0, 0, width, height);

      // Draw the "I" rectangle with rounded corners
      ctx.fillStyle = '#000';
      
      ctx.beginPath();
      ctx.moveTo(rectX + rectRadius, rectY);
      ctx.lineTo(rectX + rectWidth - rectRadius, rectY);
      ctx.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + rectRadius, rectRadius);
      ctx.lineTo(rectX + rectWidth, rectY + rectHeightRef.current - rectRadius);
      ctx.arcTo(rectX + rectWidth, rectY + rectHeightRef.current, rectX + rectWidth - rectRadius, rectY + rectHeightRef.current, rectRadius);
      ctx.lineTo(rectX + rectRadius, rectY + rectHeightRef.current);
      ctx.arcTo(rectX, rectY + rectHeightRef.current, rectX, rectY + rectHeightRef.current - rectRadius, rectRadius);
      ctx.lineTo(rectX, rectY + rectRadius);
      ctx.arcTo(rectX, rectY, rectX + rectRadius, rectY, rectRadius);
      ctx.closePath();
      ctx.fill();

      // Draw the ball
      ctx.beginPath();
      ctx.arc(width / 2, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#f00';
      ctx.fill();
      ctx.closePath();

      if (rectGrowing.current) {
        rectHeightRef.current += 4; 
        ballRef.current.ballRadius = rectWidth / 1.3; 
        ballRef.current.y = height - rectHeightRef.current + ballRef.current.ballRadius; 

        if (rectHeightRef.current >= height) {
          rectHeightRef.current = height;
          ballRef.current.y = height - rectHeightRef.current + ballRef.current.ballRadius; 
          rectGrowing.current = false;
        }
      } else if (ballRef.current.moveUp) {
        // Ball move up and down logic when hovered
        const ballTop = height - rectHeightRef.current ; // Ball top position
        const ballBottom = height+ ballRef.current.ballRadius; // Ball bottom position (bottom of the canvas)

        ballRef.current.y += ballRef.current.dy;
        if (ballRef.current.y >= ballBottom || ballRef.current.y <= ballTop) {
          ballRef.current.dy = -ballRef.current.dy; // Reverse direction
        }
      } else {
      
        ballRef.current.y = height - rectHeightRef.current + ballRef.current.ballRadius;
      }
    };

    const interval = setInterval(draw, 30);

    const timeout = setTimeout(() => {
      rectGrowing.current = true;
    }, delay);

    const handleMouseEnter = () => {
      ballRef.current.moveUp = true;
    };

    const handleMouseLeave = () => {
      ballRef.current.moveUp = false;
      ballRef.current.y = height - rectHeightRef.current + ballRef.current.ballRadius; 
    };

    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay]);

  return (
    <canvas
      ref={canvasRef}
      width={85}
      height={110}
      style={{ display: 'block', margin: '0 auto' }}
    />
  );
};

export default CanvasNameDisplay;
