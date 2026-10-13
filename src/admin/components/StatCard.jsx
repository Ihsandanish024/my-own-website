const StatCard = ({ title, value }) => {
  return (
    <div className="rounded-xl bg-zinc-900/70 backdrop-blur border border-zinc-800 p-6">
      <p className="text-sm text-zinc-400">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
};

export default StatCard;
