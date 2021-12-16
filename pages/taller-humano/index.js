import { getAllProductionsByType } from "@/lib/graphcms";
import Link from "next/link";

export default function TallerHumano(props) {

  if(!props.productions.length){
    return <h2>No hay resultados</h2>
  }
  return (
    <div>
      <ul>
        {props.productions &&
          props.productions.map((production) => (
            <li key={production.id}>
              <Link href={`/taller-humano/${production.id}`}>
                {production.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const productions = await getAllProductionsByType("taller_humano");
  return {
    props: {
      productions,
    },
  };
}
