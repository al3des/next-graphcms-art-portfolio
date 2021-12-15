import { getAllCategories, getAllWorks } from "@/lib/graphcms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from '@/styles/works.module.css'

export default function Works(props) {
  const [filteredWorks, setFilteredWorks] = React.useState(props.works);
  const [filter, setFilter] = React.useState('reset')
  
  const handleFilterWorksByCategory = (categoryId) => {
    if (categoryId === "reset") {
      setFilter('reset')
      setFilteredWorks(props.works);
      return;
    }
    setFilter(categoryId)
    setFilteredWorks(
      props.works.filter((work) => work.worksCategory && work.worksCategory.id === categoryId)
      );
    };
    
  return (
    <>
      <h1>Works</h1>
      <div>
        <button 
        className={`${styles.btnPill} ${filter === 'reset' ? styles.filterSelected : ''}`} 
        onClick={() => handleFilterWorksByCategory("reset")}>
          All Works
        </button>
        {props.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterWorksByCategory(category.id)}
        className={`${styles.btnPill} ${filter === category.id ? styles.filterSelected : ''}`} 
            // className={filter === category.id ? styles.filterSelected : ''}
         >
            {category.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {filteredWorks.map((work) => (
              <Link key={work.id} href={`/works/${work.id}`}>
                <a>
                  <Image
                    src={work.image.url}
                    alt={work.title}
                    width={550}
                    height={400}
                    objectFit="cover"
                  />
                </a>
              </Link>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const works = await getAllWorks();
  const categories = await getAllCategories();
  console.log(works)
  return {
    props: {
      categories,
      works,
    },
  };
}
