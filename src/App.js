
import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime
      })
    }).then(response => {
      response.json().then(json => {
        console.log('result', json);
      });
    });
  }

  return (
    <main>
      <h1>258<span>.00</span> rupeya</h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic-info'>
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)} placeholder={'+200 pusshy TV'} />
          <input type="datetime-local" value={datetime}
            onChange={ev => setDatetime(ev.target.value)} />
        </div>
        <div className='description'>
          <input type='text' value={description}
            onChange={ev => setDescription(ev.target.value)} placeholder={'description'} />
        </div>
        <button type='submit'>
          Add new transaction
        </button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Jitni TV</div>
            <div className='description'>Bought a boring new Jitni TV</div>
          </div>
          <div className='right'>
            <div className='price red'>-150 rupeya</div>
            <div className='datetime'>2023-02-23</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Ayushi TV</div>
            <div className='description'>Bought a boring new Ayushi TV</div>
          </div>
          <div className='right'>
            <div className='price red'>-92 rupeya</div>
            <div className='datetime'>2023-02-30</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>cassa reetorn</div>
            <div className='description'>got moni bacc from fraand</div>
          </div>
          <div className='right'>
            <div className='price green'>+500 rupeya</div>
            <div className='datetime'>2023-02-32</div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
