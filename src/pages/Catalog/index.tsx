import { CarCard } from "components/CarCard";
import { Input } from "components/Input";

export const Catalog = () => {
  return (
    <div className="container my-4">
        <Input />
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <CarCard />
        </div>
      </div>
    </div>
  );
};
