import { useState } from "react";
import { EXAMPLES } from "../../data";
// import Coreconcept from "../coreConcept/coreConcept";
import TabButton from "../TabButton/TabButton";
// eslint-disable-next-line no-unused-vars
import coreConceptsSection from "../sections/coreConceptsSection";
import "./Main.css";
export default function Main() {
  const [mainTopic, setTopic] = useState();
  function handleSlect(BtnContent) {
    setTopic(BtnContent);
  }
  return (
    <main>
      <coreConceptsSection />

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
