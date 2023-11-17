import React from 'react';
import { useRef, useState } from 'react';

const FloatingLabel = ({ label, width, type }) => {
    const inputRef = useRef(null)
    const [isFocused, setIsFocused] = useState(false)
  
    const handleFocus = () => {
      setIsFocused(true)
    };
  
    const handleBlur = () => {
      setIsFocused(inputRef.current && inputRef.current.value !== '')
    };
  
    const handleClick = () => {
        inputRef.current.focus()
      }

  return (
    <div className={`relative w-${width} h-fit mr-5 mb-4`}>
      <input
        ref={inputRef}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full px-2 py-0 border-b border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <label
        className={`absolute left-1 ${
        (inputRef.current || inputRef.current?.value) && isFocused ? '-top-4 text-sm' : (type==='date')? '-top-4 text-sm' :  'top-0'
        } text-gray-500 text-md transition-all duration-300 cursor-text `}
        onClick={handleClick}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabel;
