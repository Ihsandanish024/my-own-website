const styles = {
  Published: "bg-green-500/10 text-green-400",
  Draft: "bg-yellow-500/10 text-yellow-400",
  Scheduled: "bg-blue-500/10 text-blue-400",
};

const StatusBadge = ({ status }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
