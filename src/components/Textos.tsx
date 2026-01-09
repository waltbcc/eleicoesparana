import type { ReactElement } from "react";

interface TextosProps {
  auditoria: any[] | null
}

function Textos({ auditoria }: TextosProps) {
    // Dentro do seu componente:
    let blocks: ReactElement[] = [];

    if (auditoria && auditoria.length > 0) {
        const item = auditoria[0]; // Pegando o primeiro item enviado pelo backend

        for (let count = 1; count <= 5; count++) {
            const titulo = item[`titulo_${count}`];
            const texto = item[`texto_${count}`];

            if (titulo && texto) {
                blocks.push(
                    <div key={count} className="flex flex-col w-full gap-2">
                        <h3
                            className="font-bold text-blue-900 text-lg lg:text-xl tracking-normal lg:tracking-wide mb-2"
                            dangerouslySetInnerHTML={{ __html: titulo }}
                        />

                        <div className="flex flex-col gap-4">
                            <p
                                className="font-normal tracking-wide text-(--azul-paragrafo) text-sm md:text-base"
                                dangerouslySetInnerHTML={{ __html: texto }}
                            />
                        </div>
                    </div>
                );
            }
        }
    }


  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col gap-4 lg:gap-5">
        {/* Renderiza automaticamente todos os blocos */}
        {blocks}
      </div>
    </section>
  )
}

export default Textos;