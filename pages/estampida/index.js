import { getAllProductionsByType } from "@/lib/graphcms";
import Link from "next/link";

export default function Estampida(props) {
  if (!props.productions.length) {
    return <h2>No hay resultados</h2>;
  }
  return (
    <div>
      <ul>
        {props.productions &&
          props.productions.map((estampida) => (
            <li key={estampida.id}>
              <Link href={`/estampida/${estampida.id}`}>{estampida.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const productions = await getAllProductionsByType("estampida");
  return {
    props: {
      productions,
    },
  };
}
