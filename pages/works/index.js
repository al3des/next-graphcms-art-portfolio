import { getAllCategories, getAllWorks } from "@/lib/graphcms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "@/styles/works.module.css";

export default function Works(props) {
  const [filteredWorks, setFilteredWorks] = React.useState(props.works);
  const [filter, setFilter] = React.useState("reset");

  const handleFilterWorksByCategory = (categoryId) => {
    if (categoryId === "reset") {
      setFilter("reset");
      setFilteredWorks(props.works);
      return;
    }
    setFilter(categoryId);
    setFilteredWorks(
      props.works.filter(
        (work) => work.worksCategory && work.worksCategory.id === categoryId
      )
    );
  };

  return (
    <>
      <div>
        <button
          className={`${styles.btnPill} ${
            filter === "reset" ? styles.filterSelected : ""
          }`}
          onClick={() => handleFilterWorksByCategory("reset")}
        >
          All Works
        </button>
        {props.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterWorksByCategory(category.id)}
            className={`${styles.btnPill} ${
              filter === category.id ? styles.filterSelected : ""
            }`}
            // className={filter === category.id ? styles.filterSelected : ''}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {filteredWorks.map((work) => (
          <div  className='hover:scale-105 hover:z-50'>
          <Link 
             
          key={work.id} href={`/works/${work.id}`}>
            <a>
              <Image
                src={work.image.url}
                alt={work.title}
                width={550}
                height={400}
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            </a>
          </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const works = await getAllWorks();
  const categories = await getAllCategories();
  return {
    props: {
      categories,
      works,
    },
  };
}
