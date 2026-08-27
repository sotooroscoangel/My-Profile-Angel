import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__header">
        <p className="experience__eyebrow">03 / EXPERIENCE</p>

        <h2 className="experience__title">
          Experience
        </h2>
      </div>

      <div className="experience__list">
        <article className="experience__item">
          <div className="experience__date">
            FEB 2025 — PRESENT
          </div>

          <div className="experience__content">
            <h3>Automation Engineer</h3>

            <p className="experience__company">
              CEMI Automation
            </p>

            <p className="experience__description">
              Industrial automation and electrical field engineering
              for machinery and power systems in the food industry —
              installation, integration, and commissioning across live
              production plants (Unilever, Cremería Americana, Flora
              Food). Started as an intern in February 2025, promoted
              to engineer in February 2026.
            </p>

            <ul className="experience__highlights">
              <li>
                Installed and wired power, control, and safety panels
                — conduit, VFDs, PLCs, and industrial sensors
                (127V/220V/440V).
              </li>
              <li>
                Led the field implementation of a conveyor-belt safety
                system (Keyence interlocks, guards, accumulation
                sensors) on a Knorr line at Unilever.
              </li>
              <li>
                Handled projects end-to-end — site surveys, BOMs, and
                CAPEX quotations/bidding — through installation and
                start-up.
              </li>
              <li>
                Field troubleshooting across Allen-Bradley, Siemens,
                Mitsubishi, and Omron platforms; recognized by CEMI&apos;s
                Engineering department.
              </li>
            </ul>
          </div>
        </article>

        <article className="experience__item">
          <div className="experience__date">
            AUG 2024 — DEC 2024
          </div>

          <div className="experience__content">
            <h3>Automotive Electronics Engineer</h3>

            <p className="experience__company">
              ITESM · General Motors — Formula SAE
            </p>

            <p className="experience__description">
              Led the electrical subsystem of a Formula SAE race car —
              an 18-week program spanning design, manufacturing,
              integration, and validation (Siemens NX, ANSYS).
            </p>

            <ul className="experience__highlights">
              <li>
                Designed the car&apos;s full electrical system — wiring
                diagrams, distribution, fuse box, and harness routing.
              </li>
              <li>
                Built the safety system (e-stops, kill switches,
                start-up interlocks) and programmed the instrument
                panel.
              </li>
              <li>
                Implemented sensors (temperature, oil pressure, RPM,
                speed, clutch, brake light) and ran electrical load
                calculations.
              </li>
              <li>
                Diagnosed and fixed carburetion issues on the
                car&apos;s 1993 Honda CBR600 engine — 3rd place at
                Formula SAE UANL 2025; 1st place at ExpoIngenierías
                (2023–2025).
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience
