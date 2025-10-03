import "../sample.css";

export default function AchievementCard({ title, value }) {
  return (
    <div className="achievement-card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}
