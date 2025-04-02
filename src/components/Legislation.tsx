import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

export const Legislation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section className='pt-24 pb-16' ref={ref}>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto'
        >
          <h1 className='text-4xl font-bold text-fost-primary mb-8'>
            Proposed Waste Management Legislation
          </h1>

          {/* Tab navigation */}
          <div className='flex mb-6 border-b'>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "overview"
                  ? "border-b-2 border-fost-primary text-fost-primary"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "critical"
                  ? "border-b-2 border-fost-primary text-fost-primary"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("critical")}
            >
              Critical Analysis
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "goals"
                  ? "border-b-2 border-fost-primary text-fost-primary"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("goals")}
            >
              Goals & Advantages
            </button>
          </div>

          {activeTab === "overview" && (
            <div className='prose prose-lg'>
              <h2>Fines for Improper Waste Sorting</h2>
              <p>
                To improve recycling efficiency and reduce contamination in
                waste streams, we propose the implementation of fines for
                improper waste sorting. Non-recyclable materials in the blue PMC
                recycling bags create significant issues in the sorting process
                and reduce the effectiveness of recycling efforts.
              </p>

              <div className='bg-fost-bg p-6 rounded-lg my-6'>
                <h3>Proposed Penalties for:</h3>
                <ul>
                  <li>
                    <strong>Non-Recyclable Materials:</strong> Items that cannot
                    be recycled and contaminate the recycling stream
                  </li>
                  <li>
                    <strong>Mixing Different Recyclable Categories:</strong>{" "}
                    Materials like paper, plastic, and glass must be properly
                    separated. Improper mixing disrupts the recycling process
                    and lowers quality of recovered materials
                  </li>
                  <li>
                    <strong>
                      Non-Compliance with Local Sorting Regulations:
                    </strong>{" "}
                    Households and businesses must follow local guidelines,
                    including using correct waste bags and properly disposing of
                    hazardous materials
                  </li>
                </ul>
              </div>

              <h3>International Precedents</h3>
              <p>
                While fines for improper waste disposal are already enforced in
                various countries, stricter penalties have proven effective in
                increasing compliance. For example, in Japan, businesses that
                fail to sort waste correctly can face fines of up to 500,000 yen
                (approximately €4,200). Implementing similar measures can
                reinforce the importance of proper waste separation.
              </p>

              <h2 className='mt-12'>PMC/PMD Eating Machine Strategy</h2>
              <p>
                To introduce and evaluate the effectiveness of PMC/PMD eating
                machines (reverse vending machines), we plan a structured
                deployment strategy, beginning with a small-scale rollout in
                Brussels.
              </p>

              <div className='bg-fost-bg p-6 rounded-lg my-6'>
                <h3>Phase 1: Pilot Deployment</h3>
                <ul>
                  <li>
                    Initial test phase within a single major grocery store chain
                    in Brussels (Currently considering Delhaize or Carrefour)
                  </li>
                  <li>
                    Machines installed in approximately 25% of stores in the
                    selected chain
                  </li>
                  <li>
                    Evaluation of customer interaction, adoption rates, and
                    operational logistics
                  </li>
                </ul>
              </div>

              <div className='bg-fost-bg p-6 rounded-lg my-6'>
                <h3>Key Performance Indicators</h3>
                <ul>
                  <li>
                    <strong>Adoption Rate:</strong> 15-25% of grocery store
                    customers within three months
                  </li>
                  <li>
                    <strong>Machine Utilization:</strong> 200-400 items
                    processed per day
                  </li>
                  <li>
                    <strong>Recycling Volume:</strong> 2,500-5,000 PMC/PMD items
                    per store monthly
                  </li>
                  <li>
                    <strong>Operational Uptime:</strong> At least 95%
                  </li>
                  <li>
                    <strong>Customer Satisfaction:</strong> 80%+ positive
                    feedback
                  </li>
                </ul>
              </div>

              <h2 className='mt-12'>Improving PMC Recycling Compliance</h2>
              <p>
                To enhance recycling accuracy and reduce common mistakes, we
                propose adding black-and-white or transparent icons below the
                existing icons on the blue PMC bag.
              </p>

              <div className='bg-fost-bg p-6 rounded-lg my-6'>
                <h3>Visual Indicators for Common Mistakes</h3>
                <ul>
                  <li>
                    <strong>Oversized Plastics:</strong> Icon showing large
                    plastic container {"(>8L)"} with a cross
                  </li>
                  <li>
                    <strong>Non-Empty Containers:</strong> Icon showing
                    container with liquid and warning sign
                  </li>
                  <li>
                    <strong>Paper Waste:</strong> Icon showing paper stack with
                    arrow pointing to different bin
                  </li>
                </ul>
                <p className='mt-4'>
                  Icons will include short descriptions in Dutch, French, and
                  German to ensure clarity across all Belgian language
                  communities.
                </p>
              </div>
            </div>
          )}

          {activeTab === "critical" && (
            <div className='prose prose-lg'>
              <h2>Critical Analysis of the Proposed Legislation</h2>

              <div className='bg-rose-50 p-6 rounded-lg my-6 border-l-4 border-rose-500'>
                <h3>Potential Challenges & Criticisms</h3>
                <ul>
                  <li>
                    <strong>Equity Concerns:</strong> Flat-rate fines
                    disproportionately affect lower-income households,
                    potentially creating an unfair burden on vulnerable
                    populations
                  </li>
                  <li>
                    <strong>Education vs. Punishment:</strong> Critics argue
                    resources might be better allocated to education rather than
                    punitive measures, as many sorting errors are due to lack of
                    knowledge
                  </li>
                  <li>
                    <strong>Enforcement Feasibility:</strong> The process of
                    inspecting individual waste bags raises practical and
                    privacy concerns. Consistent enforcement across regions may
                    be difficult
                  </li>
                  <li>
                    <strong>Administrative Burden:</strong> Implementation
                    requires additional personnel and systems to monitor
                    compliance, issue fines, and handle appeals
                  </li>
                  <li>
                    <strong>Technological Limitations:</strong> PMC eating
                    machines may face technical challenges with recognizing and
                    sorting all types of packaging materials
                  </li>
                </ul>
              </div>

              <h3>Alternative Approaches</h3>
              <p>
                Several alternative or complementary approaches could be
                considered:
              </p>
              <ul>
                <li>
                  <strong>Deposit-Return Systems:</strong> Expanding existing
                  programs where consumers pay a deposit that's refunded upon
                  proper recycling
                </li>
                <li>
                  <strong>Positive Incentives:</strong> Rewarding proper sorting
                  through reduced waste collection fees or community benefits
                </li>
                <li>
                  <strong>Simplification of Rules:</strong> Streamlining
                  recycling guidelines to make proper sorting more intuitive and
                  accessible
                </li>
                <li>
                  <strong>Producer Responsibility:</strong> Greater emphasis on
                  manufacturers to create easily recyclable packaging and
                  contribute to infrastructure
                </li>
              </ul>

              <h3>Implementation Considerations</h3>
              <p>
                If proceeding with the proposed legislation, several
                modifications could address concerns:
              </p>
              <ul>
                <li>
                  Graduated fine system based on frequency of violations and
                  household size
                </li>
                <li>
                  Trial period with warnings before implementing monetary
                  penalties
                </li>
                <li>
                  Earmarking fine revenue specifically for recycling education
                  and infrastructure
                </li>
                <li>
                  Exemptions or assistance programs for elderly, disabled, or
                  low-income residents
                </li>
                <li>Clear appeal process for disputed violations</li>
              </ul>
            </div>
          )}

          {activeTab === "goals" && (
            <div className='prose prose-lg'>
              <h2>Goals & Advantages of the Proposed Legislation</h2>

              <h3>Primary Objectives</h3>
              <div className='bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-500'>
                <h4>Environmental Impact</h4>
                <ul>
                  <li>
                    <strong>Reduce Contamination Rates:</strong> Decrease
                    contamination in recycling streams from current estimated
                    15-25% to below 8%
                  </li>
                  <li>
                    <strong>Increase Material Recovery:</strong> Improve the
                    quantity and quality of recovered materials by 30% within
                    two years
                  </li>
                  <li>
                    <strong>Divert Waste from Landfills:</strong> Reduce waste
                    sent to landfills or incineration by 20% within three years
                  </li>
                  <li>
                    <strong>Carbon Footprint Reduction:</strong> Lower CO₂
                    emissions by an estimated 50,000 tons annually through
                    improved recycling efficiency
                  </li>
                </ul>
              </div>

              <div className='bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-blue-500'>
                <h4>Economic Benefits</h4>
                <ul>
                  <li>
                    <strong>Recycling Industry Growth:</strong> Stimulate the
                    recycling sector, potentially creating 500+ green jobs
                    within five years
                  </li>
                  <li>
                    <strong>Processing Cost Reduction:</strong> Lower sorting
                    and processing costs by €15-20 million annually across
                    Belgium
                  </li>
                  <li>
                    <strong>Raw Material Recovery:</strong> Increase value of
                    recovered materials by an estimated €25 million annually
                  </li>
                  <li>
                    <strong>Innovation Catalyst:</strong> Drive investment in
                    recycling technologies and circular economy solutions
                  </li>
                </ul>
              </div>

              <h3>Systemic Advantages</h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
                <div className='bg-fost-bg p-6 rounded-lg'>
                  <h4>Behavioral Change</h4>
                  <ul>
                    <li>Creates clear consequences for non-compliance</li>
                    <li>Establishes recycling as a civic responsibility</li>
                    <li>Reinforces positive waste management habits</li>
                    <li>Increases public awareness of recycling importance</li>
                  </ul>
                </div>

                <div className='bg-fost-bg p-6 rounded-lg'>
                  <h4>Policy Integration</h4>
                  <ul>
                    <li>Aligns with EU Circular Economy Action Plan</li>
                    <li>Complements existing EPR schemes</li>
                    <li>Supports Belgium's climate commitments</li>
                    <li>
                      Creates framework for future waste reduction initiatives
                    </li>
                  </ul>
                </div>
              </div>

              <h3>Long-Term Vision</h3>
              <p>
                This legislation represents a crucial step toward Belgium's
                transition to a true circular economy. By implementing effective
                enforcement mechanisms alongside innovative technologies like
                PMC eating machines, we aim to fundamentally transform waste
                management from a linear system to a circular model where
                materials maintain their highest utility and value.
              </p>
              <p>
                The combination of penalties and educational initiatives creates
                a balanced approach that addresses both immediate contamination
                issues and longer-term behavioral changes needed for sustainable
                waste management.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
