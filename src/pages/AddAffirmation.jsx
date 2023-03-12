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
    createAffirmation();
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
    <>
      <h2>Add new affirmation</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="text">Affirmation</label>
          <input
            type="text"
            name="text"
            onChange={handleInputChange}
            value={text}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </>
  );
}
