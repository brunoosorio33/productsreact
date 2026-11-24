interface CarProps {
  owner: string;
  brand: string;
  model: string;
  km: number;
}

function Car({ owner, brand, model, km }: CarProps) {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <header className="bg-slate-950 px-6 py-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
          Propietario
        </p>
        <h2 className="mt-1 break-words text-lg font-semibold">{owner}</h2>
      </header>

      <div className="px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Vehículo
        </p>
        <h3 className="mt-1 break-words text-2xl font-bold tracking-tight text-slate-950">
          {model}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-600">{brand}</p>

        <footer className="mt-5 flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
          <p className="text-sm font-medium text-slate-600">Kilometraje</p>
          <p className="shrink-0 text-xl font-bold tabular-nums text-emerald-700">
            {new Intl.NumberFormat("es-ES").format(km)}{" "}
            <span className="text-sm font-semibold">km</span>
          </p>
        </footer>
      </div>
    </article>
  );
}

export default Car;
