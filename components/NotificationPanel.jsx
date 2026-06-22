function NotificationPanel() {
  const alerts = [
    'Food budget is at 90%',
    'Transport budget exceeded'
  ];

  return (
    <div className="notifications">
      <h2>Alerts</h2>

      {alerts.map((alert, index) => (
        <div key={index} className="alert">
          {alert}
        </div>
      ))}
    </div>
  );
}

export default NotificationPanel;