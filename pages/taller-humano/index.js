import { getAllProductionsByType } from "@/lib/graphcms";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/productions-list.module.css";
import Head from "next/head";

export default function TallerHumano(props) {
  // console.log(props);
  if (!props.productions.length) {
    return <h2>No hay resultados</h2>;
  }
  return (
    <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_SITE_TITLE} | Taller Humano</title>
    </Head>
    <div className={styles.list}>
      {props.productions &&
        props.productions.map((production) => (
          <div key={production.id} className={styles.item}>
            {/* HEADER */}
            <div className={styles.header}>
              {/* INFO */}
              <div className={styles.info}>
                <span>{new Date(production.dateFrom).getYear() + 1900}</span>
                {/* <span>{new Date(production.dateTo).toLocaleDateString()} </span> */}
                {production.rol.map((rol) => (
                  <span key={rol} className={styles.pill}>
                    {rol}
                  </span>
                ))}
              </div>
              <Link href={`/taller-humano/${production.id}`}>
                <h2 className={styles.title}>{production.title}</h2>
              </Link>
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
            <Link href={`/taller-humano/${production.id}`}>
              <a className={styles.btn}>leer mas</a>
            </Link>
          </div>
        ))}
    </div>
        </>
  );
}

export async function getStaticProps() {
  // const productions = await getAllProductionsByType("taller_humano");
  const productions = [
    {
      id: 1,
      title: "Taller Humano @ Test Location",
      rol: ["Producer"],
      featuredImage: { url: "/placeholder.png" },
      dateFrom: "01-01-2020",
      dateTo: "2020-02-10",
    },
  ];
  return {
    props: {
      productions,
    },
  };
}
