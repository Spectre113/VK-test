import { useState } from 'react';
import { CatsTabs } from './components/CatsTabs/CatsTabs';

function App() {
  const [tab, setTab] = useState<'all' | 'favorites'>('all');

  return (
    <div className="container">
      <CatsTabs activeTab={tab} onChange={setTab} />
    </div>
  );
}

export default App;
