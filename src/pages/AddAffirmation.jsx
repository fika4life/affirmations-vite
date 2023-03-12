import { useState } from 'react';
import { supabase } from '../client';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

export default function AddAffirmation() {
  // let navigate = useNavigate();
  const [text, setText] = useState('');
  const [posts, setPosts] = useState({ text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    //handle submit
    if (text.length == 0) {
      notifyError('Please type in an affirmation');
    } else {
      createAffirmation();
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const notifySuccess = () =>
    toast('Affirmation added', {
      position: 'top-center',
      hideProgressBar: true,
      autoClose: 3000,
      type: 'success'
    });

  const notifyError = (error) =>
    toast(error, {
      position: 'top-center',
      hideProgressBar: true,
      autoClose: 3000,
      type: 'error'
    });

  async function createAffirmation() {
    try {
      const { data, error, status } = await supabase
        .from('affirmations')
        .insert({ text: text })
        .select();

      if (error) {
        console.log(status);
        throw error;
      }

      if (data) {
        setText('');
        notifySuccess();
      }
    } catch (error) {
      console.log(error.message);
      notifyError(error.message);
    }
  }
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-24">Add new affirmation</h2>

      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            htmlFor="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Affirmation
          </label>
          <input
            type="text"
            name="text"
            id="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={handleInputChange}
            value={text}
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
