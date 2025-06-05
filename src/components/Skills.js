import React from 'react';

const skillsData = [
  {
    category: 'Languages & Scripting',
    skills: [
      { name: 'Python', logo: `${process.env.PUBLIC_URL}/python.webp` },
      { name: 'SQL', logo: `${process.env.PUBLIC_URL}/ssms.png` },
      { name: 'R', logo: `${process.env.PUBLIC_URL}/r.jpeg` },
      { name: 'Shell Scripting', logo: `${process.env.PUBLIC_URL}/shell.jpeg` },
      { name: 'Unix', logo: `${process.env.PUBLIC_URL}/Unix.png` },
      { name: 'HTML', logo: `${process.env.PUBLIC_URL}/html.png` },
      { name: 'JavaScript', logo: `${process.env.PUBLIC_URL}/JavaScript.webp` },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'AWS Neptune', logo: `${process.env.PUBLIC_URL}/neptune.png` },
      { name: 'Neo4j', logo: `${process.env.PUBLIC_URL}/neo4j.png` },
      { name: 'Tableau', logo: `${process.env.PUBLIC_URL}/tableau.png` },
      { name: 'Power BI', logo: `${process.env.PUBLIC_URL}/powerbi.png` },
      { name: 'Azure DevOps', logo: `${process.env.PUBLIC_URL}/azure.png` },
      { name: 'GitHub', logo: `${process.env.PUBLIC_URL}/github.png` },
      { name: 'Google Colab', logo: `${process.env.PUBLIC_URL}/colab.webp` },
      { name: 'VS Code', logo: `${process.env.PUBLIC_URL}/vscode.jpeg` },
      { name: 'Putty', logo: `${process.env.PUBLIC_URL}/putty.png` },
      { name: 'Databricks', logo: `${process.env.PUBLIC_URL}/databricks.png` },
    ],
  },
  {
    category: 'Databases & Reporting',
    skills: [
      { name: 'Oracle SQL Developer', logo: `${process.env.PUBLIC_URL}/oracle-sql.png` },
      { name: 'Microsoft Excel', logo: `${process.env.PUBLIC_URL}/excel.png` },
      { name: 'IBM Cognos', logo: `${process.env.PUBLIC_URL}/ibm cognos.png` },
      { name: 'MongoDB', logo: `${process.env.PUBLIC_URL}/mongodb.png` },
      { name: 'PostgreSQL', logo: `${process.env.PUBLIC_URL}/postgre.png` },
      { name: 'SSMS', logo: `${process.env.PUBLIC_URL}/ssms.png` },
    ],
  },
  {
    category: 'Dev & Agile Tools',
    skills: [
      { name: 'JIRA', logo: `${process.env.PUBLIC_URL}/jira.svg` },
      { name: 'Confluence', logo: `${process.env.PUBLIC_URL}/confluence.png` },
      { name: 'ServiceNow', logo: `${process.env.PUBLIC_URL}/servicenow.png` },
      { name: 'Agile', logo: `${process.env.PUBLIC_URL}/agile.png` },
      { name: 'Slack', logo: `${process.env.PUBLIC_URL}/slack.png` },
      { name: 'Microsoft Teams', logo: `${process.env.PUBLIC_URL}/teams.jpeg` },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="bg-white text-gray-900 flex items-center justify-center px-6 py-12 rounded-2xl">
    <div className="max-w-6xl w-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Skills</h2>
      <p className="text-md text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        A well-rounded set of technical skills across data engineering, DevOps, cloud platforms, visualization tools,
        and agile practices. Here’s a categorized snapshot of what I work with:
      </p>

      {skillsData.map((group) => (
        <div key={group.category} className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{group.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-14 h-14 object-contain mb-2"
                />
                <span className="text-sm text-center font-medium text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
