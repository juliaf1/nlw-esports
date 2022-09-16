interface GameCardProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameCard(props: GameCardProps) {
  return(
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt="" />
      
      <div className="w-full h-full px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 flex flex-col justify-end">
        <strong className="font-bold text-white block">{ props.title }</strong>
        <span className="text-zinc-300 text-sm block">{ props.adsCount } anúncio(s)</span>
      </div>
    </a>
  )
};