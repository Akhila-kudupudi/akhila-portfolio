import React from 'react';

const skillsData = [
  {
    category: 'Languages & Scripting',
    skills: [
      { name: 'Python', logo: '/python.webp' },
      { name: 'SQL', logo: '/ssms.png' },
      { name: 'R', logo: '/r.jpeg' },
      { name: 'Shell Scripting', logo: '/shell.jpeg' },
      { name: 'Unix', logo: '/Unix.png' }, 
      { name: 'HTML', logo: '/html.png' },
      { name: 'JavaScript', logo: '/JavaScript.webp' },

    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'AWS Neptune', logo: '/neptune.png' },
      { name: 'Neo4j', logo: '/neo4j.png' },
      { name: 'Tableau', logo: '/tableau.png' },
      { name: 'Power BI', logo: '/powerbi.png' },
      { name: 'Azure DevOps', logo: '/azure.png' },
      { name: 'GitHub', logo: '/github.png' },
      { name: 'Google Colab', logo: '/colab.webp' },
      { name: 'VS Code', logo: '/vscode.jpeg' },
      { name: 'Putty', logo: '/putty.png' },
      { name: 'Databricks', logo: '/databricks.png' },

    ],
  },
  {
    category: 'Databases & Reporting',
    skills: [
      { name: 'Oracle SQL Developer', logo: '/oracle-sql.png' },
      { name: 'Microsoft Excel', logo: '/excel.png' },
      { name: 'IBM Cognos', logo: '/ibm cognos.png' },
      { name: 'MongoDB', logo: '/mongodb.png' },
      { name: 'PostgreSQL', logo: '/postgre.png' },
      { name: 'SSMS',logo: '/ssms.png'}, 
    ],
  },
  {
    category: 'Dev & Agile Tools',
    skills: [
      { name: 'JIRA', logo: '/jira.svg' },
      { name: 'Confluence', logo: '/confluence.png' },
      { name: 'ServiceNow', logo: '/servicenow.png' },
      { name: 'Agile', logo: '/agile.png' },
      { name: 'Slack', logo: '/slack.png' },
      { name: 'Microsoft Teams', logo: '/teams.jpeg' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="bg-white text-gray-900 flex items-center justify-center px-6 py-12 rounded-2xl">
    <div className="max-w-6xl w-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Skills</h2>
      <p className="text-md text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        A well-rounded set of technical skills across data engineering, DevOps, cloud platforms, visualization tools, and agile practices. Here’s a categorized snapshot of what I work with:
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
