import { getAllProductionsByType, getProductionById } from "@/lib/graphcms";
import Image from "next/image";

export default function Estampida(props) {
  return (
    <div style={{ marginBottom: "2em" }}>
      <div
        style={{
          // marginBottom: '2em',
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          backgroundImage: `url(https://via.placeholder.com/720X200?text=Imagen+de+prueba)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "200px",
          padding: "0.5em",
        }}
      >
        <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          {props.taller.title}
        </h2>
        <h2>{props.taller.rol}</h2>
      </div>
      <div>
        <span>{new Date(props.taller.dateFrom).toLocaleDateString()}</span> to{" "}
        <span>{new Date(props.taller.dateTo).toLocaleDateString()}</span>
      </div>
      <div>
        {props.taller.description.split("\n").map((p) => (
          <p style={{ margin: "1em 0" }}>{p}</p>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1em",
        }}
      >
        {props.taller.gallery.map((image) => (
          <Image
            key={image}
            src={image}
            alt={props.taller.title}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  // const estampida = await getProductionById(params.id)
  const taller = {
    id: 1,
    title: "Taller Humano @ Test Location",
    rol: ["Producer"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut porttitor. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Velit laoreet id donec ultrices tincidunt arcu non. Sed adipiscing diam donec adipiscing tristique risus nec. In pellentesque massa placerat duis ultricies lacus. Nulla pharetra diam sit amet nisl suscipit adipiscing. Mollis nunc sed id semper risus in. Turpis cursus in hac habitasse platea dictumst. Sit amet commodo nulla facilisi. \nNisl condimentum id venenatis a condimentum vitae sapien. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Eu sem integer vitae justo. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Sed odio morbi quis commodo. Est lorem ipsum dolor sit amet consectetur adipiscing. Ipsum consequat nisl vel pretium lectus quam id leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Vestibulum sed arcu non odio euismod lacinia. Ut porttitor leo a diam sollicitudin tempor id eu. Nec feugiat in fermentum posuere urna nec tincidunt praesent.",
    featuredImage: { url: "/placeholder.png" },
    dateFrom: "01-01-2020",
    dateTo: "2020-02-10",
    gallery: [
      "https://via.placeholder.com/150/0000FF/808080?Text=Foto_1",
      "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Foto_2",
      "https://via.placeholder.com/150/FFFF00/000000?Text=Foto_3",
      "https://via.placeholder.com/150/000000/FFFFFF/?text=Foto_4",
    ],
  };

  return {
    props: {
      taller,
    },
  };
}

// export async function getStaticPaths(){
//     const estampidas = await getAllProductionsByType('estampida')
//     const paths = estampidas.map(e=> ({params: { id: e.id}}))

//     return {
//         paths,
//         fallback: true
//     }
// }
