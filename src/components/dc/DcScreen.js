
import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {

  return (
    <div>
      <h1 className="text-center font-bold text-2xl py-5">DC Heroes</h1>

      <HeroList
        publisher="DC Comics"
      />
    </div>
  )
}
