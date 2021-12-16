import { getAllProductionsByType } from "@/lib/graphcms";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/productions-list.module.css";

export default function TallerHumano(props) {
  // console.log(props);
  if (!props.productions.length) {
    return <h2>No hay resultados</h2>;
  }
  return (
    <div className={styles.list}>
      {props.productions &&
        props.productions.map((production) => (
          <div key={production.id} className={styles.item}>
            {/* HEADER */}
            <div className={styles.header}>
              <Link href={`/taller-humano/${production.id}`}>
                <h2 className={styles.title}>{production.title}</h2>
              </Link>
              <div className={styles.info}>
                <span>
                  {new Date(production.dateFrom).toLocaleDateString()} |
                </span>
                <span>{new Date(production.dateTo).toLocaleDateString()} </span>
                {production.rol.map((rol) => (
                  <span key={rol} className={styles.pill}>
                    {rol}
                  </span>
                ))}
              </div>
              </div>
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={production.featuredImage.url}
                  alt={production.title}
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              {/* EXCERPT */}
              <p>{production.excerpt}</p>
              <Link href={`/taller-humano/${production.id}`} ><a className={styles.btn}>leer mas</a></Link>
          </div>
        ))}
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
