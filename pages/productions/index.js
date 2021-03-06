import { getAllProductionsByType } from "@/lib/graphcms";
import Link from "next/link";

export default function TallerHumano(props) {
  console.log(props.productions);
  if(!props.productions.length){
    return <h2>No hay resultados</h2>
  }
  return (
    <div>
      <ul>
        {props.productions &&
          props.productions.map((production) => (
            <li key={production.id}>
              <Link href={`/production/${production.id}`}>
                {production.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const productions = await getAllProductionsByType("produccion");
  return {
    props: {
      productions,
    },
  };
}
