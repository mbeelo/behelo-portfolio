import ToolTile from './ToolTile';
import { getToolsBySection } from '@/lib/tools';

export default function PhysicalToolsSection() {
  const physicalTools = getToolsBySection('physical');

  return (
    <section className="section">
      <div className="container">
        <h2>Physical Tools</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '16px'
        }}>
          {physicalTools.map((tool) => (
            <ToolTile key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}