import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return (
        <RevealOnScroll>
            <section id="home" className="min-h-screen flex items-center justify-center relative">
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Bem vindo ao meu Portifólio
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        Sou um desenvolvedor front-end iniciante, que adora resolver problemas e criar soluções criativas e inovadoras.
                        Aqui voce vai encontrar alguns dos meus projetos e as ferramentas que eu uso para desenvolver eles.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Ver Projetos
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            Entre em Contato
                        </a>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}