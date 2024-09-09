import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/slider";

const Filtre = ({ donneesFiltres, onFilterChange }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const $slider = $(sliderRef.current);

    $slider.slider({
      range: true,
      min: 0,
      max: 219000,
      values: [0, 219000],
      slide: function (event, ui) {
        $("#facet_label").html(
          `${formaterNombre(ui.values[0])}&nbsp;TND - ${formaterNombre(
            ui.values[1]
          )}&nbsp;TND`
        );
        onFilterChange("prix", ui.values);
      },
    });

    return () => {
      if ($slider.data("ui-slider")) {
        $slider.slider("destroy");
      }
    };
  }, [onFilterChange]);

  const formaterNombre = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleMarqueChange = (e) => {
    const { name, checked } = e.target;
    onFilterChange("marques", name, checked);
  };

  const handleStatutChange = (e) => {
    const { name, checked } = e.target;
    onFilterChange("statuts", name, checked);
  };

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold mb-2">Filtrer par</h3>
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Marques</h4>
        {donneesFiltres.marque.map((marque) => (
          <div key={marque} className="mb-2">
            <label>
              <input
                type="checkbox"
                className="mr-2"
                name={marque}
                onChange={handleMarqueChange}
              />
              {marque}
            </label>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Statut</h4>
        {donneesFiltres.statut.map((statut) => (
          <div key={statut} className="mb-2">
            <label>
              <input
                type="checkbox"
                className="mr-2"
                name={statut}
                onChange={handleStatutChange}
              />
              {statut}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Plage de prix</h4>
        <p id="facet_label">0&nbsp;TND - 219,000&nbsp;TND</p>
        <div id="slider-range" ref={sliderRef}></div>
      </div>
    </div>
  );
};

export default Filtre;
