export default function Description() {
  return (
    <section className="section">
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p style={{ fontSize: 'var(--step-1)', textAlign: 'left', maxWidth: '600px', margin: '0', color: 'var(--muted)' }}>
          A collection of tools I needed that you might want.
        </p>
      </div>
    </section>
  );
}