const Experience = () => (
  <section
    id="experience"
    className="min-h-screen flex items-center justify-center px-8 py-20"
  >
    <div className="max-w-5xl w-full bg-white bg-opacity-90 shadow-xl rounded-xl p-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Work Experience</h2>

      {/* TCS Experience */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <img src="/TCS.jpeg" alt="Tata Consultancy Services Logo" className="h-12 w-auto object-contain" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">DevOps Engineer</h3>
            <p className="text-gray-600">Tata Consultancy Services (TCS) • Aug 2021 – Aug 2023</p>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-700 text-md leading-relaxed space-y-2">
          <li>Built CI/CD pipelines using Azure DevOps, GitHub, and Shell scripting to streamline deployments.</li>
          <li>Developed warehouse operation screens in JDA WMS for load planning and pallet loading.</li>
          <li>Implemented workflows in JDA TMS including dock scheduling, freight billing, and transportation planning.</li>
          <li>Created governance and financial reports using IBM Cognos and Excel.</li>
          <li>Handled 3PL incident tickets in ServiceNow to support logistics and warehouse functions.</li>
          <li>Contributed to Agile sprint planning using JIRA and Confluence.</li>
          <li>Earned <strong>4× Star of the Sprint</strong> awards for major project milestones and successful deployments.</li>
        </ul>
      </div>

      {/* Woolworths Client Project */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <img src="/woolworths.jpeg" alt="Woolworths Client Logo" className="h-12 w-auto object-contain" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Client Project – Logistics Support</h3>
            <p className="text-gray-600">Woolworths (Australia & New Zealand)</p>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-700 text-md leading-relaxed space-y-2">
          <li>Led enhancements for BigW ASN processing and dock operations in Woolworths distribution centers.</li>
          <li>Developed and deployed solutions for Xdock operations and inventory movement optimization.</li>
          <li>Enabled successful GoLive of ARDC and Hoxton Park Distribution Center with DevOps and test cycle support.</li>
        </ul>
      </div>

      {/* Tools & Technologies */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-blue-700 mb-2">Tools & Technologies</h4>
        <p className="text-gray-700 leading-relaxed">
          Azure DevOps · GitHub · SQL · Oracle SQL Developer · Unix · Shell Scripting · IBM Cognos · JDA WMS/TMS · ServiceNow · Agile · Excel · Putty · Incident Management
        </p>
      </div>
    </div>
  </section>
);

export default Experience;
