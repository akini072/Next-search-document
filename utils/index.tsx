import { DetailSearchOption, ProductType, SearchOptionType } from "@/type";

function extractDatePart(dateString: string) {
  return dateString.split("T")[0]; // Gets the YYYY-MM-DD part
}

export const totalSearchFunction = (
  arrayData: ProductType[],
  filterOptions: SearchOptionType
) => {
  const result = arrayData.filter((item: ProductType) => {
    return (
      extractDatePart(item.created_on) === filterOptions.startDate &&
      extractDatePart(item.modified_on) === filterOptions.endDate &&
      item.cost === Number(filterOptions.budget) &&
      item.part_type_search_values.range === Number(filterOptions.square)
    );
  });

  return result;
};

export const detailSearchFunction = (
  arrayData: ProductType[],
  filterOptions: DetailSearchOption,
  activeTab: number
) => {
  const tabSearchResult = arrayData.filter((item: ProductType) => {
    return (
      item.part_type_search_values.weight === Number(filterOptions.mass) &&
      item.part_type_search_values.range === Number(filterOptions.length) &&
      item.part_type_search_values.velocity === Number(filterOptions.speed) &&
      item.tab_info === Number(activeTab)
    );
  });

  const remainData = arrayData.filter((item: ProductType) => {
    return (
      item.tab_info != Number(activeTab)
    );
  });

  return [...tabSearchResult, ...remainData];
};
