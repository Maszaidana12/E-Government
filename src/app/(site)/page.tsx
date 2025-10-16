
import { Hero, Main} from "@/components";

export default function Home() {
  return (
   <div> 
    <Hero />
    <div className="mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold font-outfit">Layanan Kami</h2>
      </div>
      <Main />
    </div>
    </div>
  );
}
