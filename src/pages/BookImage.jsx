import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const bookImages = [
  {
    id: "whatsapp-1",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.23 PM.jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.23 PM.jpeg",
    label: "WhatsApp Image 2026-06-26 at 2.34.23 PM",
  },
  {
    id: "whatsapp-2",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.23 PM (1).jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.23 PM (1).jpeg",
    label: "WhatsApp Image 2026-06-26 at 2.34.23 PM (1)",
  },
  {
    id: "whatsapp-3",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.24 PM.jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.24 PM.jpeg",
    label: "WhatsApp Image 2026-06-26 at 2.34.24 PM",
  },
  {
    id: "whatsapp-4",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.24 PM (1).jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.24 PM (1).jpeg",
    label: "WhatsApp Image 2026-06-26 at 2.34.24 PM (1)",
  },
  {
    id: "whatsapp-5",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.25 PM.jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.25 PM.jpeg",
    label: "WhatsApp Image 2026-06-26 at 2.34.25 PM",
  },
  {
    id: "whatsapp-6",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.25 PM (1).jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.25 PM (1).jpeg",
    label: "WhatsApp Image 2026-06-26 at 2.34.25 PM (1)",
  },
  {
    id: "whatsapp-7",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.25 PM (2).jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.25 PM (2).jpeg",
    label: "WhatsApp Image 2026-06-26 at 2.34.25 PM (2)",
  },
];

const BookImage = () => {
  const { imageId } = useParams();
  const image = bookImages.find((item) => item.id === imageId);

  if (!image) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl shadow-black/20">
            <h1 className="text-3xl font-semibold text-zinc-100">Image not found</h1>
            <p className="mt-4 text-zinc-400">The requested book image could not be found.</p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-amber-300 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/20"
            >
              Back to book page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-10 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Book image</p>
              <h1 className="mt-4 text-4xl font-semibold text-zinc-100">{image.label}</h1>
            </div>
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
            >
              Back to book
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-black/20">
          <img
            src={encodeURI(image.src)}
            alt={image.label}
            onError={(event) => {
              if (event.currentTarget.src !== encodeURI(image.fallback)) {
                event.currentTarget.src = encodeURI(image.fallback);
              }
            }}
            className="mx-auto max-h-[80vh] w-full rounded-[2rem] object-contain"
          />
          <div className="mt-6 rounded-4xl border border-zinc-800 bg-zinc-950/90 p-6 text-zinc-400">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Image source</p>
            <p className="mt-4">{image.label}</p>
            <p className="mt-4 text-sm text-zinc-500">If the image does not load from /images, it will fall back to the original public root path.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookImage;
