import Nav from "./components/Nav";
import Effects from "./components/Effects";
import { CV_PATH, EMAIL, GITHUB, PROJECTS, TECH, TIMELINE, WHATSAPP } from "./data";

export default function Home() {
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <>
      <Nav />
      <main>
        <section id="inicio">
          <div className="wrap hero">
            <div className="rv">
              <div className="avail"><i />Disponível para estágio</div>
              <h1>Transformando ideias em <em>experiências digitais.</em></h1>
              <p className="lead">
                Sou Lucas Lohan, estudante de Desenvolvimento de Sistemas e apaixonado por tecnologia,
                programação e criação de soluções digitais.
              </p>
              <div className="cta">
                <a className="btn primary" href="#projetos">Conheça meus projetos</a>
                <a className="btn" href={CV_PATH} download>Baixar currículo</a>
              </div>
              <div className="mini">
                <a href={GITHUB} {...ext}>GitHub ↗</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
            <div className="code rv" aria-hidden="true">
              <div className="bar"><b /><b /><b />&nbsp;lucas.py</div>
              <pre>
                <span className="ln" style={{ animationDelay: ".3s" }}><span className="k">class</span> <span className="s">Desenvolvedor</span>:</span>
                <span className="ln" style={{ animationDelay: ".9s" }}>{"    nome = "}<span className="s">&quot;Lucas Lohan&quot;</span></span>
                <span className="ln" style={{ animationDelay: "1.5s" }}>{"    formacao = "}<span className="s">&quot;Desenvolvimento de Sistemas&quot;</span></span>
                <span className="ln" style={{ animationDelay: "2.1s" }}>{"    objetivo = "}<span className="s">&quot;Estágio em tecnologia&quot;</span></span>
                <span className="ln" style={{ animationDelay: "2.7s" }}>{" "}</span>
                <span className="ln" style={{ animationDelay: "3.1s" }}><span className="k">print</span>(Desenvolvedor.objetivo)<span className="cur" /></span>
              </pre>
            </div>
          </div>
        </section>

        <section id="sobre" className="alt">
          <div className="wrap">
            <p className="eyebrow rv">Sobre</p>
            <h2 className="rv">Um pouco sobre mim.</h2>
            <div className="about">
              <p className="rv">
                Atualmente curso o Ensino Médio Técnico em Desenvolvimento de Sistemas no Colégio Paulo de
                Tarso. Tenho desenvolvido projetos pessoais e acadêmicos para colocar em prática meus
                conhecimentos em programação, desenvolvimento web e criação de aplicações.
              </p>
              <ul className="facts rv">
                <li><small>Localização</small>São Paulo, SP</li>
                <li><small>Formação</small>Técnica em andamento, conclusão em 2027</li>
                <li><small>Inglês</small>Básico</li>
                <li><small>Disponibilidade</small>Período da tarde</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="tecnologias">
          <div className="wrap">
            <p className="eyebrow rv">Tecnologias</p>
            <h2 className="rv">Tecnologias que utilizo.</h2>
            <div className="grid">
              {TECH.map((t) => (
                <div className="tech rv" key={t.name}>
                  <div className="m">{t.mark}</div>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="alt">
          <div className="wrap">
            <p className="eyebrow rv">Projetos</p>
            <h2 className="rv">Projetos selecionados.</h2>
            <div className="projects">
              {PROJECTS.map((p) => (
                <article className="proj rv" key={p.name}>
                  <div className="pv">
                    <div className="tb"><b /><b /><b /><span>{p.host}</span></div>
                    <div className="pg">{p.name}</div>
                  </div>
                  <div className="pb">
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <a className="btn" href={p.url} {...ext}>Acessar projeto ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trajetoria">
          <div className="wrap">
            <p className="eyebrow rv">Trajetória</p>
            <h2 className="rv">Minha trajetória.</h2>
            <ol className="tl">
              {TIMELINE.map((t) => (
                <li className="rv" key={t.text}><b>{t.when}</b>{t.text}</li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contato" className="alt">
          <div className="wrap">
            <div className="contact rv">
              <p className="eyebrow">Contato</p>
              <h2>Vamos construir algo juntos?</h2>
              <p>
                Estou em busca da minha primeira oportunidade na área de tecnologia e aberto a conhecer
                novas pessoas, projetos e equipes.
              </p>
              <div className="cta" style={{ margin: 0 }}>
                <a className="btn primary" href={`mailto:${EMAIL}`}>Enviar e-mail</a>
                <a className="btn" href={WHATSAPP} {...ext}>WhatsApp</a>
                <a className="btn" href={GITHUB} {...ext}>GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap ft">
          <div>
            <strong style={{ color: "var(--text)" }}>Lucas Lohan</strong> · Desenvolvimento de Sistemas
            <br />© <span id="y">{new Date().getFullYear()}</span> Lucas Lohan. Todos os direitos reservados.
          </div>
          <nav aria-label="Rodapé">
            <a href={GITHUB} {...ext}>GitHub</a>
            <a href={`mailto:${EMAIL}`}>E-mail</a>
          </nav>
        </div>
      </footer>
      <Effects />
    </>
  );
}
