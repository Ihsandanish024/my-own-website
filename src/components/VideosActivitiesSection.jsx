const videos = [
  {
    id: "uf85qlEdmFg",
    title: "Arabic Qasida at namal university islamabad pakistan",
    description: "A thoughtful lecture on Islamic ethics, faith, and daily practice.",
  },
  {
    id: "uKSxeAW4H0k",
    title: "Arabic poetry in praise of Qatar",
    description: " arabic poetry in the praise of Qatar arab country because of its good role in islamaization.",
  },
  {
    id: "RujXznBSjwU",
    title: "speech about akherah in arabic language",
    description: "A community address about leadership, scholarship, and ethical guidance.",
  },
  {
    id: "s3TfRCoj5KQ",
    title: "shiekh introduction",
    description: "A small introduction to the sheikh with his own words.",
  },
];

const getEmbedUrl = (id) => `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&modestbranding=1&mute=0`;

const VideoCard = ({ video, isArabic }) => (
  <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-lg shadow-black/10 transition-none md:transition md:duration-300 md:hover:-translate-y-1 md:hover:shadow-2xl">
    <div className="relative aspect-video overflow-hidden bg-zinc-950">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={getEmbedUrl(video.id)}
        title={video.title}
        frameBorder="0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className={`px-6 py-5 ${isArabic ? "text-right" : "text-left"}`}>
      <h3 className="text-lg font-semibold text-zinc-100">{video.title}</h3>
      {video.description ? (
        <p className="mt-3 text-sm leading-6 text-zinc-400">{video.description}</p>
      ) : null}
    </div>
  </article>
);

const VideosActivitiesSection = ({ isArabic, t }) => {
  const sectionAlign = isArabic ? "text-right" : "text-left";

  return (
    <section className="px-6 py-16 md:px-10 lg:px-12 border-t border-zinc-800/70">
      <div className="mx-auto max-w-7xl">
        <div className={`max-w-3xl ${sectionAlign}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">
            {t.videosLabel}
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            {t.videosHeading}
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-400">
            {t.videosIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} isArabic={isArabic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosActivitiesSection;
