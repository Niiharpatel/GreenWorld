import React, { useEffect, useState } from "react";
import "./PlantPage.css";
import plantData from "./platData.json";
import CardStructure from "../../components/CardCom/CardStructure";
import { useSelector } from "react-redux";

function PlantPage() {
  let [data, setData] = useState(plantData);

  const newData = useSelector((state) => {
    return state?.user?.searchData;
  });

  useEffect(() => {
    setData(data?.filter?.((e) => e?.category === "plant"));
    // let filterData = data?.filter?.((e) => {
    //   return e?.name?.toLowerCase?.()?.includes?.(newData?.toLowerCase?.()); // for search data
    // });
    // setData(filterData?.filter?.((e) => e?.category === "plant")); // for show only plant data
  }, [newData]);

  return (
    <>
      <div className="plant_sec">
        <div className="container">
          <div className="plant_bg">
            <div className="plant_flex">
              {data
                ?.filter((plant) =>
                  plant.name.toLowerCase().includes(newData.toLowerCase())
                )
                .map((plant) => {
                  return <CardStructure data={plant} key={plant.id} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlantPage;
