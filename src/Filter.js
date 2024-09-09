import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/slider";

const Filter = ({ filtersData }) => {
  useEffect(() => {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 219000,
      values: [0, 219000],
      slide: function (event, ui) {
        $("#facet_label").html(
          formatNumber(ui.values[0]) +
            "&nbsp;TND - " +
            formatNumber(ui.values[1]) +
            "&nbsp;TND"
        );
      },
    });
  });
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold mb-2">Filter By</h3>
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Brand</h4>
        {filtersData.brand.map((brand) => (
          <div key={brand} className="mb-2">
            <label>
              <input type="checkbox" className="mr-2" />
              {brand}
            </label>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Status</h4>
        {filtersData.status.map((status) => (
          <div key={status} className="mb-2">
            <label>
              <input type="checkbox" className="mr-2" />
              {status}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Price Range</h4>
        <p id="facet_label">0&nbsp;TND - 219,000&nbsp;TND</p>
        <div id="slider-range"></div>
      </div>
    </div>
  );
};

export default Filter;
