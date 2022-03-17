import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  return (
    <div>
        <h1 className="text-center font-bold text-2xl py-5">Marvel Heroes</h1>

        <HeroList
          publisher="Marvel Comics"
        />
    </div>
  )
}
