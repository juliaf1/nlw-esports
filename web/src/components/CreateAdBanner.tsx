import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreateAdBanner() {
    return(
        <div className="bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-16 pt-1">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center flex-wrap">
                <div>
                    <strong className="text-white text-2xl font-black block">Não encontrou o seu duo?</strong>
                    <span className="text-zinc-400 ">Publique um anúncio para encontrar outros jogadores.</span>
                </div>

                <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center justify-center gap-2">
                    <MagnifyingGlassPlus size={24}/>
                    Publicar anúncio
                </button>
            </div>
        </div>
    )
};