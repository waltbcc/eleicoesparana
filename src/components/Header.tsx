import BandeiraBrasil from "../../public/bandeira-brasil.jpg";

interface HeaderProps {
  codacompan: string;
  data_extenso: string;
}

function Header({ codacompan, data_extenso }: HeaderProps) {
  return (
    <header className="lg:h-50 w-full lg:flex items-center justify-center  lg:bg-(--degrade) lg:bg-gradient-(--degrade) lg:mb-10">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-evenly">
        <div className="order-2 flex flex-col items-center justify-center gap-0 lg:gap-2 h-20 mt-2 lg:mt-0">
          <h1 className="text-(--azul-principal) text-2xl lg:text-3xl font-bold">
            {codacompan}
          </h1>
          <h2 className="text-(--azul-principal) text-base font-bold">
            {data_extenso}
          </h2>
        </div>
        <img
          src={BandeiraBrasil}
          alt="imagem da bandeira do brasil"
          className="order-1 lg:h-36 h-24 w-full lg:w-[540px] object-cover rounded-b-2xl lg:rounded-md"
        />
      </div>
    </header>
  );
}

export default Header;
