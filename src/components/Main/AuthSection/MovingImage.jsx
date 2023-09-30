/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';

const MovingImage = ({ src, srcSet, alt, customClassName, width, height }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [prevCursorX, setPrevCursorX] = useState(0);
  const [prevCursorY, setPrevCursorY] = useState(0);

  useEffect(() => {
    const handleMouseMove = e => {
      const newX = e.clientX;
      const deltaY = e.clientY - prevCursorY;
      const deltaX = newX - prevCursorX;

      setImagePosition(prevPosition => ({
        x: Math.max(0, Math.min(prevPosition.x + deltaX, 30)),
        y: Math.max(0, Math.min(prevPosition.y + deltaY, 30)),
      }));

      setPrevCursorX(newX);
      setPrevCursorY(e.clientY);
      setCursorPosition({ x: newX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorPosition, prevCursorX, prevCursorY]);

  return (
    <div
      css={css`
        position: relative;
        transition: transform 0.3s ease-in-out;
        transform: translate(${imagePosition.x}px, ${imagePosition.y}px);
      `}
      className={customClassName}
    >
      <img src={src} srcSet={srcSet} alt={alt} width={width} height={height} />
    </div>
  );
};

export default MovingImage;
