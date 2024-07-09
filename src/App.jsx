import { useState } from 'react';
import Header from './components/Header.jsx';
import {CORE_CONCEPTS} from './data (2)';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data (2)';

function App() {
  const [ selectedTopic, setSelectedTopic ] =useState();

  function handleSelect(selectedButton){
    setSelectedTopic( selectedButton );
  }

  let tabContent = <p>Please select a topic.</p>

  if(selectedTopic){
    tabContent = <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>

        <ul>
          {CORE_CONCEPTS.map((item)=>(
            <CoreConcepts key={item.title} {...item}/> 
            ))}
        </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
           <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect("components")} label="Components"/>
           <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>handleSelect("jsx")} label="JSX"/>
           <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>handleSelect("props")} label="Props"/>
           <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>handleSelect("state")} label="State"/>
          </menu>
          { tabContent }
        </section>
      </main>
    </div>
  );
}

export default App;
