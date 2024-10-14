import { Button } from "flowbite-react";
import { ProductType } from "@/type";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { moveToOutput } from "@/store/reducers/productSlice";
import { Accordion } from "flowbite-react";

interface ProductModalProps {
  info: ProductType;
}

const ProductModal = (props: ProductModalProps) => {
  const { info } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(moveToOutput(info));
  };

  return (
    <Accordion.Panel>
      <Accordion.Title className="!w-[100%]"></Accordion.Title>
      <Accordion.Content>
        <div className="flex flex-row justify-center w-[100%] overflow-y-scroll h-[40vh]">
          <Input label="part_type" value={info.part_type} />
          <Input label="part_name" value={info.part_name} />
          <Input label="icad_file_path" value={info.icad_file_path } />
          <Input
            label="icad_file_path_display"
            value={info.icad_file_path_display}
          />
          <Input label="urdf_file_path" value={info.urdf_file_path} />
          <Input label="maker" value={info.maker} />
          <Input label="model_no" value={info.model_no} />
          <Input
            label="standard_delivery_period"
            value={info.standard_delivery_period}
          />
          <Input label="cost" value={info.cost} />
          <Input label="combination_factor" value={info.combination_factor} />
          <Input label="memo" value={info.memo} />
          <Input label="part_name_display" value={info.part_name_display} />
          <Input
            label="part_description_display"
            value={info.part_description_display}
          />
          <Input label="cost_display" value={info.cost_display} />
          <Input label="part_type_custom_values" value={info.cost_display} />
          <div className="flex flex-row flex-wrap w-[100%] p-2 gap-2">
            <Input
              label="body_weight"
              value={info.part_type_custom_values.body_weight}
            />

            <Input
              label="required_voltage"
              value={info.part_type_custom_values.required_voltage}
            />

            <Input
              label="max_carrable_weight"
              value={info.part_type_custom_values.max_carrable_weight}
            />

            <Input
              label="max_reachable_range"
              value={info.part_type_custom_values.max_reachable_range}
            />
          </div>
          <div className="flex flex-row flex-wrap p-2 gap-2">
            <Input label="range" value={info.part_type_search_values.range} />
            <Input label="weight" value={info.part_type_search_values.weight} />
            <Input
              label="velocity"
              value={info.part_type_search_values.velocity}
            />
            <Input
              label="has_style_change"
              value={info.part_type_search_values.has_style_change}
            />
          </div>
          <Input label="created_on" value={info.created_on} />
          <Input label="create_app_version" value={info.create_app_version} />
          <Input label="modified_on" value={info.modified_on} />
          <Input
            label="creamodify_app_versionted_on"
            value={info.modify_app_version}
          />
          <Input label="status" value={info.status} />
        </div>
        <div className="w-[100%] px-5 pt-5 flex flex-row justify-end border-t">
          <Button onClick={() => handleClick()}>決定</Button>
        </div>
      </Accordion.Content>
    </Accordion.Panel>
  );
};

export default ProductModal;
