import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1 className='global-center' style={{ marginTop: "-1px" }}>Home</h1>
      <div className="card-grid" style={{ marginTop: "87px" }}>
        {state.data.map(dentist => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  );
}

export default Home;