import Coreconcept from "../coreConcept/coreConcept";
import { CORE_CONCEPTS } from "../../data";
export default function coreConceptsSection() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <Coreconcept key={coreConcept.title} {...coreConcept} />
        ))}
      </ul>
    </section>
  );
}
