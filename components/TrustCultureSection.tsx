import ToolTile from './ToolTile';
import { getToolsBySection } from '@/lib/tools';

export default function TrustCultureSection() {
  const trustTools = getToolsBySection('trust');
  const cultureTools = getToolsBySection('culture');

  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Culture Column */}
          <div>
            <h2>Culture</h2>
            <div style={{ marginTop: '16px' }}>
              {cultureTools.map((tool) => (
                <ToolTile key={tool.id} {...tool} />
              ))}
            </div>
          </div>

          {/* Trust Column */}
          <div>
            <h2>Trust</h2>
            <div style={{ marginTop: '16px' }}>
              {trustTools.map((tool) => (
                <ToolTile key={tool.id} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}