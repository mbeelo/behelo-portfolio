import ToolTile from './ToolTile';
import { getToolsBySection } from '@/lib/tools';

export default function LearningSection() {
  const learningTools = getToolsBySection('learning');

  return (
    <section className="section">
      <div className="container">
        <h2>Learning</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '16px'
        }}>
          {learningTools.map((tool) => (
            <ToolTile key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}