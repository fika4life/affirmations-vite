import { supabase } from './client';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [affirmation, setAffirmation] = useState('');
  const [affirmations, setAffirmations] = useState();

  useEffect(() => {
    fetchAffirmations();
  }, []);

  async function fetchAffirmations() {
    try {
      let { data, error, status } = await supabase
        .from('affirmations')
        .select();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        const nrAffirmations = data.length;
        const randomNumber = Math.floor(Math.random() * nrAffirmations);
        setAffirmation(data[randomNumber]);
        setAffirmations(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const getRandomAffirmation = () => {
    const nrAffirmations = affirmations.length;
    const randomNumber = Math.floor(Math.random() * nrAffirmations);
    setAffirmation(affirmations[randomNumber]);
  };

  return (
    <div className="App container mx-auto mt-60">
      <main className="place-content-center text-center">
        <h4 className="text-2xl font-bold dark:text-white mb-28">
          {affirmation.text}
        </h4>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={getRandomAffirmation}
        >
          New Affirmation
        </button>
      </main>
    </div>
  );
}

export default App;
