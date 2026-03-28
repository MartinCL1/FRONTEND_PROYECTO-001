function PlantasHeader({ bottom, left }) {
    return (
        <section className={`absolute rounded-2xl overflow-hidden ${bottom} ${left} flex text-white w-125`}>
            <div className="w-1/2">
                <img src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Planta"
                    className="shadow-xs shadow-gray-900" />
            </div>
            <div className="bg-white p-4 text-slate-950">
                Lorem ipsum dolor sit amet, consectetur.</div>
        </section>
    )
}

export default PlantasHeader
