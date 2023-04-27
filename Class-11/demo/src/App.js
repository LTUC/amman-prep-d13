import './App.css';
import Person from './components/Person';
import List from './components/List';

import data from './assets/data/data.json';

function App() {
  // const dt = require('./assets/data/data.json')
  
  return (
    <section>
      <p style={{color: 'green', backgroundColor: 'yellow'}}>test</p>
      <Person name='Mohammed' age='25'/>
      {/* <Person name='Ayah' />
      <Person name='Tasneem' />
      <Person name='Ahmad' />
      <Person name='Laith' />
      <Person name='Anas' /> */}
      <List dataList={data}/>
    </section>
  );
}

export default App;
