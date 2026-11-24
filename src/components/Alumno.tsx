interface AlumnoProps {
  name: string;
  lastName: string;
  aboutMe: string;
  job: string;
  ageOfExperience: number;
}

function Alumno({
  name,
  lastName,
  aboutMe,
  job,
  ageOfExperience,
}: AlumnoProps) {
  const initials = `${name.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <article className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <header className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-semibold text-indigo-600">
          {initials}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-xl font-bold text-slate-900">
            {name} {lastName}
          </h2>
          <p className="truncate text-sm font-medium text-indigo-600">{job}</p>
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">{aboutMe}</p>

      <footer className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Experiencia
        </span>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
          {ageOfExperience} {ageOfExperience === 1 ? "año" : "años"}
        </span>
      </footer>
    </article>
  );
}

export default Alumno;
