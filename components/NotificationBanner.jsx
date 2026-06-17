function NotificationBanner({
  message,
  type
}) {
  return (
    <div
      className={`alert ${type}`}
    >
      {message}
    </div>
  );
}

export default NotificationBanner;