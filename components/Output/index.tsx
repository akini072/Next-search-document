import ImageCard from "../MainBoard/OutputBoard/ImageCard";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { ProductType } from "@/type";
import { Checkbox, Table } from "flowbite-react";
// import { useDispatch } from "react-redux";
// import { setActiveGroup } from "@/store/reducers/productSlice";

const Output = () => {
  const outputData = useSelector(
    (state: RootState) => state.products.outputData
  );
  // const dispatch = useDispatch();

  // const handleClick = (groupId: number) => {
  //   dispatch(setActiveGroup(groupId));
  // };

  const spreadOutputData = (data: ProductType[]) => (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="p-4">
        {outputData.length == 0 ? "" : <Checkbox />}
      </Table.Cell>

      <Table.Cell>
        {data
          .filter((item: ProductType) => item.tab_info == 0)
          .map((product: ProductType) => (
            <ImageCard
              key={product.id}
              info={product}
              tab_info={product.tab_info}
            ></ImageCard>
          ))}
      </Table.Cell>
      <Table.Cell>
        {data
          .filter((item: ProductType) => item.tab_info == 1)
          .map((product: ProductType) => (
            <ImageCard
              key={product.id}
              info={product}
              tab_info={product.tab_info}
            ></ImageCard>
          ))}
      </Table.Cell>
      <Table.Cell>
        {data
          .filter((item: ProductType) => item.tab_info == 2)
          .map((product: ProductType) => (
            <ImageCard
              key={product.id}
              info={product}
              tab_info={product.tab_info}
            ></ImageCard>
          ))}
      </Table.Cell>
      <Table.Cell>
        {data
          .filter((item: ProductType) => item.tab_info == 3)
          .map((product: ProductType) => (
            <ImageCard
              key={product.id}
              info={product}
              tab_info={product.tab_info}
            ></ImageCard>
          ))}
      </Table.Cell>
    </Table.Row>
  );

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4"></Table.HeadCell>
          <Table.HeadCell>項目1 </Table.HeadCell>
          <Table.HeadCell>項目2</Table.HeadCell>
          <Table.HeadCell>項目3</Table.HeadCell>
          <Table.HeadCell>項目4</Table.HeadCell>
          <Table.HeadCell>項目5</Table.HeadCell>
          <Table.HeadCell>項目6</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {spreadOutputData(outputData)}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Output;
