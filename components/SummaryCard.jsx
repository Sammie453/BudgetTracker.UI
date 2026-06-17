function SummaryCard({ title, amount }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <h2>R {amount}</h2>
    </div>
  );
}

export default SummaryCard;