import { getAllCategories, getAllWorks } from "@/lib/graphcms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Works(props) {
  const [filteredWorks, setFilteredWorks] = React.useState(props.works);
  const handleFilterWorksByCategory = (categoryId) => {
    if (categoryId === "reset") {
      setFilteredWorks(props.works);
      return;
    }
    setFilteredWorks(
      props.works.filter((work) => work.category.id === categoryId)
    );
  };

  return (
    <>
      <h1>Works</h1>
      <div>
        <button onClick={() => handleFilterWorksByCategory("reset")}>
          All Works
        </button>
        {props.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterWorksByCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="flex">
        {filteredWorks.map((work) => (
          <div key={work.id}>
            <div>
              <Link href={`/works/${work.id}`}>
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
            </div>
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
