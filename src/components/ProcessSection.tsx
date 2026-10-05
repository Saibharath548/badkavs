const steps = [
  {
    number: '01',
    title: 'Discuss',
    description: 'Understand the project, goals, and vision.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Clarify requirements, scope, and deliverables.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Plan the solution, architecture, and approach.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Create, implement, and develop.',
  },
  {
    number: '05',
    title: 'Review',
    description: 'Iterate, refine, and polish.',
  },
  {
    number: '06',
    title: 'Deliver',
    description: 'Deliver the final, polished work.',
  },
];

export default function ProcessSection() {
  return (
    <div className="process-grid">
      {steps.map((step) => (
        <div key={step.number} className="process-card">
          <div className="process-card__number">{step.number}</div>
          <h3 className="process-card__title">{step.title}</h3>
          <p className="process-card__description">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
