import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Project = ({ image, title, id, previewDesc, demo }) => {
  return (
    <div className="group">
      <Link to={`/project/${id}`} className="block">
        <div className="card overflow-hidden transition-transform group-hover:-translate-y-1">
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-56 sm:h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold leading-snug">{title}</h3>
                {previewDesc ? (
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    {previewDesc}
                  </p>
                ) : null}
              </div>

              {demo ? (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="shrink-0 mt-1 inline-flex items-center justify-center rounded-full border border-brand-200 bg-brand-50 p-2 text-brand-700 hover:bg-brand-100 transition-colors"
                  aria-label="Open live demo"
                >
                  <BsArrowUpRightCircle size={18} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
