import React from 'react';
import { useRef, useState } from 'react';

const FloatingLabel = ({ content, label, width, type, register, value, rules }) => {
    const inputRef = useRef(null)
    const [valorInput, setValorInput] = useState('')
    
    
    const handleInputChange = (event) =>{
      setValorInput(event.target.value)
    }


  return (
    <div className={`relative w-${width} h-fit mr-5 mb-3`}>
      <input
        {...register(label, rules)}
        type={type}
        value={value ?? valorInput}
        onChange={handleInputChange}
        className="w-full px-2 py-0 border-b border-gray-300 focus:outline-none focus:border-cyan-500"
      />
      <label
        className={`absolute left-1 -top-4 text-sm text-cyan-500 text-semibold text-md transition-all duration-300 cursor-text `}
      >
        {content}
      </label>
    </div>
  );
};

export default FloatingLabel;
