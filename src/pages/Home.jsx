export default function Home({ onNavigate }) {
  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">REACT JS • PRACTICAL ASSESSMENT</span>
          <h1>Five activities.<br /><span>One organized portal.</span></h1>
          <p>Practice state, events, input validation, conditional logic, calculations, and conditional rendering.</p>
          <button className="primary large" onClick={() => onNavigate('activity1')}>Begin Assessment <span>→</span></button>
        </div>
        <div className="overview-box">
          <strong>Assessment Overview</strong>
          <div><span>Activities</span><b>05</b></div>
          <div><span>Logic & Functionality</span><b>70%</b></div>
          <div><span>Design</span><b>30%</b></div>
        </div>
      </div>
      <div className="section-title"><span>Activity Directory</span><small>Select an activity to begin</small></div>
      <div className="activity-grid">
        <button className="activity-card purple" onClick={() => onNavigate('activity1')}><b>01</b><span>Login Authentication</span><small>Forms & validation</small></button>
        <button className="activity-card blue" onClick={() => onNavigate('activity2')}><b>02</b><span>Grade Evaluation</span><small>Score classification</small></button>
        <button className="activity-card orange" onClick={() => onNavigate('activity3')}><b>03</b><span>Password Strength</span><small>String conditions</small></button>
        <button className="activity-card green" onClick={() => onNavigate('activity4')}><b>04</b><span>Electricity Bill</span><small>Tiered calculations</small></button>
        <button className="activity-card pink" onClick={() => onNavigate('activity5')}><b>05</b><span>Attendance Checker</span><small>Time classification</small></button>
      </div>
    </section>
  );
}
