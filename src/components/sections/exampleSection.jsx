import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import Section from "../section";
import Tabs from "../Tabs";
import { EXAMPLES } from "../../data";
export default function ExampleSection() {
  const [mainTopic, setTopic] = useState();
  function handleSlect(BtnContent) {
    setTopic(BtnContent);
  }
  return (
    <Section title={"Examples"} id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
