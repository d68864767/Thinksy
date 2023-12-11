import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('/api/feedbacks');
      setFeedbacks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitFeedback = async (feedback) => {
    try {
      await axios.post('/api/feedbacks', feedback);
      fetchFeedbacks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Thinksy</h1>
      <h2>Performance Reviews Made Easy</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>{feedback.content}</li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        const content = e.target.elements.content.value;
        submitFeedback({ content });
        e.target.reset();
      }}>
        <input type="text" name="content" placeholder="Enter feedback" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
