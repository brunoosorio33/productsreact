import Products from "./components/Productos";

function App() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">
                Nuestra colección de cafés
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <Products
                    name="Ethiopia Yirgacheffe"
                    description="Café con notas florales y cítricas."
                    price={18.50}
                    origin="Etiopía"
                    available={true}
                    image="/images/cafebolsa.png"
                />

                <Products
                    name="Colombia Supremo"
                    description="Café con notas de chocolate y caramelo."
                    price={16.90}
                    origin="Colombia"
                    available={true}
                    image="/images/bolsacafe2.png"
                />

                <Products
                    name="Brazil Santos"
                    description="Café suave con notas de frutos secos."
                    price={14.50}
                    origin="Brasil"
                    available={false}
                    image="/images/bolsacafe3.png"
                />

            </div>
        </main>
    );
}

export default App;
