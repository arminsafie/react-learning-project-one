import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import Coreconcept from "../coreConcept/coreConcept";
import TabButton from "../TabButton/TabButton";
import "./Main.css";
export default function Main() {
  const [mainTopic, setTopic] = useState();
  function handleSlect(BtnContent) {
    setTopic(BtnContent);
  }
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concept</h2>
        <ul>
          {CORE_CONCEPTS.map((coreConcept) => (
            <Coreconcept key={coreConcept.title} {...coreConcept} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={mainTopic === "components"}
            onClick={() => handleSlect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={mainTopic === "jsx"}
            onClick={() => handleSlect("jsx")}
          >
            Jsx
          </TabButton>
          <TabButton
            isSelected={mainTopic === "props"}
            onClick={() => handleSlect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={mainTopic === "state"}
            onClick={() => handleSlect("state")}
          >
            State
          </TabButton>
        </menu>
        <div id="tab-content">
          {!mainTopic ? (
            <p>Please Select Topic</p>
          ) : (
            <div>
              <h3>{EXAMPLES[mainTopic].title}</h3>
              <p>{EXAMPLES[mainTopic].description}</p>
              <pre>
                <code>{EXAMPLES[mainTopic].code}</code>
              </pre>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
