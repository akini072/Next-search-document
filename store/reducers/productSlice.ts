// redux/reducers/productSlice.js
import { ProductType } from "@/type";
// import { totalSearchFunction } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

interface SliceType {
  lists: ProductType[];
  wallet: number;
  budget: number;
  square: number;
  stateDate: string;
  endDate: string;
  filteredData: ProductType[];
  outputData: ProductType[];
  price: number;
  activeTab: number;
  groupNumber: number;
  selectedGroup: number;
  activeItem: ProductType[];
}

const initialState: SliceType = {
  lists: [],
  wallet: 1000,
  budget: 10,
  square: 100,
  stateDate: "",
  endDate: "",
  filteredData: [],
  outputData: [],
  price: 0,
  activeTab: 0,
  groupNumber: 0,
  selectedGroup: 0,
  activeItem: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setInitData(state) {
      state.wallet = 1000;
      state.budget = 10;
      const today = new Date();
      const formattedDate =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      state.stateDate = formattedDate;
      state.endDate = formattedDate;
      state.square = 100;
      state.filteredData = [];
      state.outputData = [];
      state.price = 0;
      state.activeTab = 0;
      state.groupNumber = 0;
      state.selectedGroup = 0;
      state.activeItem = [];
    },
    setProductList(state, { payload }: { payload: ProductType[] }) {
      state.lists = [...payload];
    },
    clearProductList(state) {
      state.lists = [];
    },
    setFilteredData(state, { payload }: { payload: ProductType[] }) {
      const temp: ProductType[] = [];
      payload.map((item: ProductType) => {
        const updatedObject = { ...item, tab_info: state.activeTab };
        temp.push(updatedObject);
      });
      state.filteredData = [...state.filteredData, ...temp];
    },
    initSearch(state, { payload }: { payload: ProductType[] }) {
      const temp: ProductType[] = [];
      payload.map((item: ProductType) => {
        const isExist = state.filteredData.findIndex(
          (product: ProductType) =>
            item.id === product.id && product.tab_info === state.activeTab
        );
        if (isExist < 0) {
          const updatedObject = { ...item, tab_info: state.activeTab };
          temp.push(updatedObject);
        }
      });
      state.filteredData = [...state.filteredData, ...temp];
    },
    moveToOutput(state, { payload }: { payload: ProductType }) {
      // state.filteredData = state.filteredData.filter((item: ProductType) => {
      //   return item.id !== payload.id;
      // });
      // console.log(payload);
      // if (state.outputData.length == 0) {
      //   state.outputData = [
      //     ...state.outputData,
      //     {
      //       group_id: state.groupNumber,
      //       children: [
      //         {
      //           ...payload,
      //           tab_info: state.activeTab,
      //         },
      //       ],
      //     },
      //   ];
      // } else {
      //   let isExistOnGroup = false;
      //   state.outputData.map((item: GroupItemType) => {
      //     const foundItem = item.children.filter(
      //       (product: ProductType) => product.id == payload.id
      //     );
      //     foundItem ? (isExistOnGroup = true) : (isExistOnGroup = false);
      //   });

      //   console.log(isExistOnGroup);

      //   if (isExistOnGroup) {
      //     state.outputData = [
      //       ...state.outputData,
      //       {
      //         group_id: state.groupNumber,
      //         children: [
      //           {
      //             ...payload,
      //             tab_info: state.activeTab,
      //           },
      //         ],
      //       },
      //     ];
      //   }
      // }

      const outputData: ProductType[] = [
        ...state.outputData.filter(
          (item: ProductType) => item.tab_info !== state.activeTab
        ),
        {
          ...payload,
          tab_info: state.activeTab,
        },
      ];
      state.outputData = [...outputData];
      ++state.groupNumber;
      let sum: number = 0;
      outputData.map((item: ProductType) => {
        sum += item.cost;
      });
      state.price = sum;
      state.wallet = 1000 - sum;
    },
    editAndMoveToOutput(state, { payload }: { payload: ProductType }) {
      // console.log(payload)
      state.filteredData = [
        payload,
        ...state.filteredData.filter(
          (item: ProductType) => item.id != payload.id
        ),
      ];

      const outputData: ProductType[] = [
        ...state.outputData.filter(
          (item: ProductType) => item.tab_info !== state.activeTab
        ),
        {
          ...payload,
          tab_info: state.activeTab,
        },
      ];
      state.outputData = [...outputData];
      ++state.groupNumber;
      let sum: number = 0;
      outputData.map((item: ProductType) => {
        sum += item.cost;
      });
      state.price = sum;
      state.wallet = 1000 - sum;
    },
    setActiveTab(state, { payload }: { payload: number }) {
      state.activeTab = payload;
    },
    setDetailedSearchData(state, { payload }: { payload: ProductType[] }) {
      state.filteredData = [...payload];
    },
    setActiveItem(state, { payload }: { payload: ProductType }) {
      state.activeTab = payload.tab_info;
      state.activeItem = [payload];
      state.filteredData = [
        payload,
        ...state.filteredData.filter(
          (item: ProductType) => item.id != payload.id
        ),
      ];
    },
  },
});

export const {
  setProductList,
  clearProductList,
  setInitData,
  setFilteredData,
  initSearch,
  moveToOutput,
  setActiveTab,
  setDetailedSearchData,
  setActiveItem,
  editAndMoveToOutput,
} = productSlice.actions;
export default productSlice.reducer;
