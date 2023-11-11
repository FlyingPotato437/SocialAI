// components/TextOptimizer.jsx
import React, { useState } from 'react';

const TextOptimizer = () => {
  const [text, setText] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, platform }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result.optimizedText); // Handle the optimized text
    } catch (error) {
      console.error('There was an error optimizing the text:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="text" className="block mb-2 text-sm text-gray-600">Text to Optimize</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-600">Choose Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          >
            <option value="">Select Platform</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>

        <button type="submit" className="w-full py-3 mt-4 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition duration-300">
          Optimize Text
        </button>
      </form>
    </div>
  );
};

export default TextOptimizer;
