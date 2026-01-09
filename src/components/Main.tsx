import NestaEdicao from './NestaEdicao'
import Textos from './Textos'
import CapaJornais from './CapaJornais'

interface CapaItem {
  codimagem: number
  caminho: string
  relevancia: number
}

interface MainProps {
  auditoria: any // Você pode substituir 'any' pelo tipo correto quando souber
  capas: CapaItem[] | null
}

function Main({ auditoria, capas }: MainProps) {
  return (
    <main className='p-4'>
      <div className='mx-auto max-w-7xl flex gap-10 flex-col md:flex-row'>
        <section className='max-w-sm w-full h-full flex flex-col gap-10'>
          <NestaEdicao auditoria={auditoria} />
          <CapaJornais capas={capas} />
        </section>

        <Textos auditoria={auditoria} />
      </div>
    </main>
  )
}

export default Main