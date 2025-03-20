import icons from "../../assets/icons"
import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <RevealOnScroll>
            <section id="projects" className="min=h=screen flex items-center justify-center py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-center text-transparent">Meus Projetos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Recanto Food</h3>
                            <p className="text-gray-400 mb-4">Recanto Food é um aplicativo de delivery que eu pensei em desenvolver aqui para a região aonde eu moro, porque aqui não chega esses aplicativos como ifood ou delivery much. É uma ideia de solução para um problema que temos na reigão.</p>
                            <div className="flex flex-wrap gap-2">
                                {["React Native", "JavaScript", "Git"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sn hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 items-center mt-6 justify-end">
                                <a href="https://github.com/VitorCardias/RecantoFood.git" rel="noreferrer noopener" target="_blank"><img className="w-8 h-8 hover:brightness-110 hover:-translate-y-0.5" src={icons.github}/></a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Carteirinha Digital</h3>
                            <p className="text-gray-400 mb-4">A carteirinha digital é uma ideia que eu pensei para deixar mais acessivel as carteirinhas da faculdade, onde ao invês do aluno carregar a carteirinha fisica ele tenha um aplicativo que possa utilizar.</p>
                            <div className="flex flex-wrap gap-2">
                                {["React Native", "JavaScript", "Firebase", "Git"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sn hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 items-center mt-6 justify-end">
                                <a href="https://github.com/VitorCardias/carteirinha-digital.git" rel="noreferrer noopener" target="_blank"><img className="w-8 h-8 hover:brightness-110 hover:-translate-y-0.5" src={icons.github}/></a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">IA Foguetes</h3>
                            <p className="text-gray-400 mb-4">É um projeto de uma IA que joga um joguinho onde ela tem que pousar o foguete em uma base, e a base fica aparecendo em partes aleatórias do mapa, o foguete tem combustivel, é bem legal.</p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "Git"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sn hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 items-center mt-6 justify-end">
                                <a href="https://github.com/VitorCardias/IA_Foguetes.git" rel="noreferrer noopener" target="_blank"><img className="w-8 h-8 hover:brightness-110 hover:-translate-y-0.5" src={icons.github}/></a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">IA GPT</h3>
                            <p className="text-gray-400 mb-4">Esse projeto é um chat-bot com IA que consegue processar, imagem, video e texto. A IA possui a personalidade de um caminhoneiro debochado e ele também consegue guardar responder algo referente a perguntas anteriores.</p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "JavaScript", "HTML/CSS", "Git", "Gemini API"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sn hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 items-center mt-6 justify-end">
                                <a href="https://github.com/VitorCardias/TrabalhoIA.git" rel="noreferrer noopener" target="_blank"><img className="w-8 h-8 hover:brightness-110 hover:-translate-y-0.5" src={icons.github}/></a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Site Portifólio</h3>
                            <p className="text-gray-400 mb-4">Esse site é a ideia de um portifólio, uma maneira de me apresentar, apresentar minhas habilidades, minhas experiências, meus projetos e também uma maneira de entrar em contato comigo.</p>
                            <div className="flex flex-wrap gap-2">
                                {["JavaScript", "HTML", "Tailwind CSS", "React JS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sn hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 items-center mt-6 justify-end">
                                <a href="" rel="noreferrer noopener" target="_blank"><img className="w-8 h-8 hover:brightness-110 hover:-translate-y-0.5" src={icons.github}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}