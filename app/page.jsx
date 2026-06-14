import Navbar from "@/components/navbar/navbar";
import Fotos from "@/components/fotos";
import Buscador from "@/components/buscador";
import Tarjeta from "@/components/tarjeta";
import Footer from "@/components/footer";

import Calendario from "@/components/calendario";
import ModalGestion from "@/components/gestionres";
import ModalUser from "@/components/zonauser";

export default function Home() {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <ModalGestion />
        <ModalUser />
      </section>

      <section className="py-5">
        <Fotos></Fotos>
      </section>

      <section className="pb-5">
        <Buscador></Buscador>
        <Calendario />
      </section>

      <section>
        <div>
          <h1 className="text-center mt-5">Bienvenido a nuestro hotel</h1>
          <p className="text-center">
            Aqui encontrás las mejores vistas sin que te cueste un ojo de la
            cara!
          </p>
        </div>
      </section>

      <section>
        <div className="d-flex justify-content-center gap-5 m-5">
          <Tarjeta
            img="/images/PicRom.jpeg"
            alt="Pareja en la piscina"
            titulo="Escapada romántica"
            descripcion="Ofertas para parejas los fines de semana"
            btn="Descubre las ofertas"
          />
          <Tarjeta
            img="/images/PicSol.jpg"
            alt="Familia en el hotel"
            titulo="Vacaciones familiares"
            descripcion="Planes especiales para toda la familia"
            btn="Ver promociones"
          />
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
