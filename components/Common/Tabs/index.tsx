import Filter from "@/components/Filter";
import { Tabs } from "flowbite-react";
import { HiTag } from "react-icons/hi";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { ProductType } from "@/type";
import { useDispatch } from "react-redux";
import { setActiveTab } from "@/store/reducers/productSlice";
import { Accordion } from "flowbite-react";
import { moveToOutput } from "@/store/reducers/productSlice";
import { useEffect, useState } from "react";
import ProductContent from "./ProductContent";

const ItemTabs = () => {
  const [active, setActive] = useState<number>(0);
  const [open, setOpen] = useState<boolean[]>([true, true, true, true]);
  const [activeT, setActiveT] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);
  const [, updateState] = useState();
  const forceUpdate = () => updateState({});

  const dispatch = useDispatch();
  const filteredData = useSelector(
    (state: RootState) => state.products.filteredData
  );
  const activeTab = useSelector((state: RootState) => state.products.activeTab);
  const activeItem = useSelector(
    (state: RootState) => state.products.activeItem
  );

  useEffect(() => {
    setActive(activeTab);
    if (activeItem && activeItem.length != 0) {
      const temp: boolean[] = [true, true, true, true];
      const tabs: boolean[] = [false, false, false, false];
      temp[activeItem[0].tab_info] = false;
      tabs[activeItem[0].tab_info] = true;
      setOpen([...temp]);
      setActiveT([...tabs]);
    }
  }, [activeTab, activeItem]);

  useEffect(() => {
    forceUpdate();
  }, [open]);
  // useEffect(() => {
  //   setOpen([...open])
  // }, [open])
  useEffect(() => {
    console.log("");
    // forceUpdate();
  }, [activeT]);

  const handleClick = (info: ProductType) => {
    dispatch(moveToOutput(info));
  };
  const spreadFilteredData = (data: ProductType[], tab_number: number) => {
    return (
      <Accordion
        key={open[data[0].tab_info]}
        collapseAll={open[data[0].tab_info]}
      >
        {data
          .filter((item: ProductType) => {
            return item.tab_info == tab_number;
          })
          .map((item: ProductType) => (
            <Accordion.Panel key={item.id}>
              <Accordion.Title className="!w-[100%] flex flex-row justify-between">
                <div className="flex flex-row  items-center justify-between min-w-[600px]">
                  <div className="flex flex-row items-center gap-10">
                    <img
                      alt=":) image not found"
                      src={item.thumbnail_image_path}
                      className="size-14 rounded-lg object-cover"
                    />
                    <div className="flex flex-row justify-between gap-10">
                      <h3 className="flex justify-between font-medium sm:text-lg text-gray-800">
                        {item.part_name_display}
                      </h3>
                      <h5 className="flex justify-between font-medium sm:text-lg text-gray-800">
                        {item.cost_display}
                      </h5>
                    </div>
                  </div>
                  <div
                    className="p-3 bg-green-800 rounded-lg text-white"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.stopPropagation();
                      handleClick(item);
                    }}
                  >
                    決定
                  </div>
                </div>
              </Accordion.Title>
              <Accordion.Content className="overflow-y-scroll h-[25vh]">
                <ProductContent item={item} />
              </Accordion.Content>
            </Accordion.Panel>
          ))}
      </Accordion>
    );
  };
  const handleActiveTab = (tabNumber: number) => {
    setActive(tabNumber);
    dispatch(setActiveTab(tabNumber));
    const tabs: boolean[] = [false, false, false, false];
    tabs[tabNumber] = true;

    setActiveT([...tabs]);
  };

  return (
    <Tabs
      key={active}
      onActiveTabChange={(activeTabNumber) => handleActiveTab(activeTabNumber)}
      aria-label="Tabs with icons"
      variant="underline"
    >
      <Tabs.Item tabIndex={0} key={0} title="項目1" icon={HiTag}>
        <div className="w-[100%] flex flex-col gap-2 justify-center">
          <div className="w-[100%]">
            <Filter></Filter>
          </div>
          {filteredData.length == 0 ? (
            <div className="flex w-[100%] text-red-700 justify-center items-center p-20">
              何も検索されていないので、何も表示しない!
            </div>
          ) : (
            <>{spreadFilteredData(filteredData, active)}</>
          )}
        </div>
      </Tabs.Item>
      <Tabs.Item
        tabIndex={1}
        key={1}
        active={activeT[1]}
        title="項目2"
        icon={HiTag}
      >
        <div className="w-[100%] flex flex-col gap-2 justify-center">
          <div className="w-[100%]">
            <Filter></Filter>
          </div>
          {filteredData.length == 0 ? (
            <div className="flex w-[100%] text-red-700 justify-center items-center p-20">
              何も検索されていないので、何も表示しない!
            </div>
          ) : (
            <>{spreadFilteredData(filteredData, active)}</>
          )}
        </div>
      </Tabs.Item>
      <Tabs.Item
        key={2}
        tabIndex={2}
        active={activeT[2]}
        title="項目3"
        icon={HiTag}
      >
        <div className="w-[100%] flex flex-col gap-2 justify-center">
          <div className="w-[100%]">
            <Filter></Filter>
          </div>
          {filteredData.length == 0 ? (
            <div className="flex w-[100%] text-red-700 justify-center items-center p-20">
              何も検索されていないので、何も表示しない!
            </div>
          ) : (
            <>{spreadFilteredData(filteredData, active)}</>
          )}
        </div>
      </Tabs.Item>
      <Tabs.Item
        key={activeT.indexOf(activeT[3])}
        tabIndex={3}
        active={activeT[3]}
        title="項目4"
        icon={HiTag}
      >
        <div className="w-[100%] flex flex-col gap-2 justify-center">
          <div className="w-[100%]">
            <Filter></Filter>
          </div>
          {filteredData.length == 0 ? (
            <div className="flex w-[100%] text-red-700 justify-center items-center p-20">
              何も検索されていないので、何も表示しない!
            </div>
          ) : (
            <>{spreadFilteredData(filteredData, active)}</>
          )}
        </div>
      </Tabs.Item>
    </Tabs>
  );
};

export default ItemTabs;
