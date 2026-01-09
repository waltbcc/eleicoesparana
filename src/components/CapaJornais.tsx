import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Image {
  id: number
  url: string
  title: string
  description: string
}

interface CapaItem {
  codimagem: number
  caminho: string
  relevancia: number
}

interface CapaJornaisProps {
  capas: CapaItem[] | null
}

const CapaJornais = ({ capas }: CapaJornaisProps) => {
  const [selecionarImagem, setselecionarImagem] = useState<Image | null>(null)

  // Se capas for null ou undefined, retorna mensagem de carregamento
  if (!capas) {
    return (
      <div className='border-1 border-zinc-300 bg-gray-300 p-2 rounded-xl'>
        <div className='max-w-7xl mx-auto text-center p-8'>
          <p className='text-gray-700'>Carregando capas dos jornais...</p>
        </div>
      </div>
    )
  }

  // Se capas estiver vazio
  if (capas.length === 0) {
    return (
      <div className='border-1 border-zinc-300 bg-gray-300 p-2 rounded-xl'>
        <div className='max-w-7xl mx-auto text-center p-8'>
          <p className='text-gray-700'>Nenhuma capa disponível hoje.</p>
        </div>
      </div>
    )
  }

  // Converter capas para formato de imagens
  const images: Image[] = capas.map(
    (item: CapaItem): Image => ({
      id: item.codimagem,
      url: item.caminho,
      title: '',
      description: '',
    }),
  )

  const abriModal = (image: Image) => {
    setselecionarImagem(image)
  }

  const fecharModal = () => {
    setselecionarImagem(null)
  }

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selecionarImagem) return

    const currentIndex = images.findIndex(img => img.id === selecionarImagem.id)
    let newIndex

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    }

    setselecionarImagem(images[newIndex])
  }

  return (
    <div className='border-1 border-zinc-300 bg-gray-300 p-2 rounded-xl'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl font-bold text-black mb-1 text-center'>
          Capa dos Jornais do Dia
        </h1>
        <p className='text-gray-700 text-center mb-2'>
          clique nas imagens para abri-las
        </p>
        <div className='grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-1'>
          {images.map(image => (
            <div
              key={image.id}
              onClick={() => abriModal(image)}
              className='cursor-pointer'
            >
              <img
                src={image.url}
                alt={image.title}
                className='w-36 h-32 object-scale-down transition-transform duration-300 group-hover:scale-110'
              />
            </div>
          ))}
        </div>

        {selecionarImagem && (
          <div
            className='fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4'
            onClick={fecharModal}
          >
            <button
              onClick={fecharModal}
              className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10'
            >
              <X size={32} />
            </button>

            <button
              onClick={e => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className='absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70'
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={e => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className='absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70'
            >
              <ChevronRight size={32} />
            </button>
            <div
              className='max-w-5xl max-h-[90vh] flex flex-col items-center'
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selecionarImagem.url}
                alt={selecionarImagem.title}
                className='max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl'
              />
              <div className='mt-4 text-center'>
                <h2 className='text-2xl font-bold text-white'>
                  {selecionarImagem.title}
                </h2>
                <p className='text-gray-300 mt-2'>
                  {selecionarImagem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CapaJornais
