
interface HeaderProps {
    nombre: string;
    apellidos: string;
    email: string;
}

function Header({ nombre, apellidos, email }: HeaderProps) {
    return (
        <header className="bg-amber-900 text-white px-3 py-3 flex justify-between items-center">
            <h1 className="text-base font-semibold">Archive Coffee
            </h1>
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold">{nombre.charAt(0).toUpperCase()}
                </div>
                <div>
                    <p className="font-semibold text-sm">{nombre} {apellidos}</p>
                    <p className="text-amber-200 text-xs">{email}</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
