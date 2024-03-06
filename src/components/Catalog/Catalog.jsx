import FAKEDATA from "./adsCars.json";
import { CatalogList, CarItemWrapper, CarImg } from "./Catalog.styled";

const Catalog = () => {
  const test = "456 Example Avenue, Lviv, Ukraine";
  let dataTest = test.split(",");
  console.log("Test", dataTest);
  return (
    <>
      <CatalogList>
        {FAKEDATA.map(({ id, img, year, make, model, rentalPrice }) => {
          return (
            <CarItemWrapper key={id}>
              <CarImg src={img} alt="car example" width={274} height={280} />
              <div>
                <h2>
                  {make} <span>{model ? model : ""}</span>
                </h2>
                <p>{year}</p>
                <p>{rentalPrice}</p>
              </div>
            </CarItemWrapper>
          );
        })}
      </CatalogList>
    </>
  );
};

export default Catalog;
