
import './App.css';

function App() {
  return (
    <main>
      <h1></h1>
      <form>
        <div className='basic-info'>
          <input type="text" placeholder={'+200 pusshy TV'} />
          <input type="datetime-local" />
        </div>
        <div className='description'>
          <input type='text' placeholder={'description'} />
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
