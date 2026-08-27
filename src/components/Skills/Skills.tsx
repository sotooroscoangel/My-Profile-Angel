import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <p className="skills__eyebrow">04 / SKILLS</p>

        <h2 className="skills__title">
          Skills &
          <br />
          Technologies
        </h2>
      </div>

      <div className="skills__grid">
        <div className="skills__group">
          <h3>Automation & Field</h3>

          <ul>
            <li>PLCs — Allen-Bradley, Siemens, Mitsubishi, Omron</li>
            <li>VFDs &amp; Industrial Instrumentation</li>
            <li>Power, Control &amp; Safety Panels</li>
            <li>Keyence Sensors</li>
          </ul>
        </div>

        <div className="skills__group">
          <h3>Design & Simulation</h3>

          <ul>
            <li>Siemens NX / NX Electrical</li>
            <li>ANSYS</li>
            <li>SolidWorks</li>
            <li>CAD / CAE</li>
          </ul>
        </div>

        <div className="skills__group">
          <h3>Programming & Data</h3>

          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Web Development — React, TypeScript</li>
            <li>Microsoft Office — Word, Excel, PowerPoint</li>
            <li>Minitab &amp; R (basic)</li>
          </ul>
        </div>

        <div className="skills__group">
          <h3>Engineering & Delivery</h3>

          <ul>
            <li>BOM, Quotations &amp; CAPEX</li>
            <li>FMEA / DOE / ANOVA</li>
            <li>Industrial Networks (Modbus, PROFINET/PROFIBUS, AS-i, SCADA) — working knowledge</li>
            <li>SCRUM / JIRA</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
