import React, { useState } from "react";
import Input from "../../ProductModal/Input";
import { ProductType } from "@/type";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { editAndMoveToOutput } from "@/store/reducers/productSlice";

interface ProductContentProps {
  item: ProductType;
}

const ProductContent = (props: ProductContentProps) => {
  const { item } = props;
  const [content, setContent] = useState<ProductType>(item);

  const dispatch = useDispatch();

  const handleClickEdit = (info: ProductType) => {
    dispatch(editAndMoveToOutput(info));
  };


  return (
    <React.Fragment>
      <div className="flex flex-col justify-center w-[100%]">
        <Input
          label="part_type"
          value={content.part_type}
          onChange={(e) => {
            setContent({ ...content, part_type: e.target.value });
          }}
        />
        <Input
          label="part_name"
          value={content.part_name}
          onChange={(e) => {
            setContent({ ...content, part_name: e.target.value });
          }}
        />
        <Input
          label="icad_file_path"
          value={content.icad_file_path}
          onChange={(e) => {
            setContent({ ...content, icad_file_path: e.target.value });
          }}
        />
        <Input
          label="icad_file_path_display"
          value={content.icad_file_path_display}
          onChange={(e) => {
            setContent({ ...content, icad_file_path_display: e.target.value });
          }}
        />
        <Input
          label="urdf_file_path"
          value={content.urdf_file_path}
          onChange={(e) => {
            setContent({ ...content, urdf_file_path: e.target.value });
          }}
        />
        <Input
          label="maker"
          value={content.maker}
          onChange={(e) => {
            setContent({ ...content, maker: e.target.value });
          }}
        />
        <Input
          label="model_no"
          value={content.model_no}
          onChange={(e) => {
            setContent({ ...content, model_no: e.target.value });
          }}
        />
        <Input
          label="standard_delivery_period"
          value={content.standard_delivery_period}
          onChange={(e) => {
            setContent({
              ...content,
              standard_delivery_period: e.target.value,
            });
          }}
        />
        <Input
          label="cost"
          value={content.cost}
          onChange={(e) => {
            setContent({ ...content, cost: Number(e.target.value) });
          }}
        />
        <Input
          label="combination_factor"
          value={content.combination_factor}
          onChange={(e) => {
            setContent({ ...content, combination_factor: e.target.value });
          }}
        />
        <Input
          label="memo"
          value={content.memo}
          onChange={(e) => {
            setContent({ ...content, memo: e.target.value });
          }}
        />
        <Input
          label="part_name_display"
          value={content.part_name_display}
          onChange={(e) => {
            setContent({ ...content, part_name_display: e.target.value });
          }}
        />
        <Input
          label="part_description_display"
          value={content.part_description_display}
          onChange={(e) => {
            setContent({
              ...content,
              part_description_display: e.target.value,
            });
          }}
        />
        <Input
          label="cost_display"
          value={content.cost_display}
          onChange={(e) => {
            setContent({ ...content, cost_display: e.target.value });
          }}
        />

        <div className="flex flex-row flex-wrap w-[100%] p-2 gap-2">
          <Input
            label="body_weight"
            value={content.part_type_custom_values.body_weight}
            onChange={(e) => {
              content.part_type_custom_values.body_weight = Number(
                e.target.value
              );
              setContent({ ...content });
            }}
          />

          <Input
            label="required_voltage"
            value={content.part_type_custom_values.required_voltage}
            onChange={(e) => {
              content.part_type_custom_values.required_voltage = Number(
                e.target.value
              );
              setContent({ ...content });
            }}
          />

          <Input
            label="max_carrable_weight"
            value={content.part_type_custom_values.max_carrable_weight}
            onChange={(e) => {
              content.part_type_custom_values.max_carrable_weight = Number(
                e.target.value
              );
              setContent({ ...content });
            }}
          />

          <Input
            label="max_reachable_range"
            value={content.part_type_custom_values.max_reachable_range}
            onChange={(e) => {
              content.part_type_custom_values.max_reachable_range = Number(
                e.target.value
              );
              setContent({ ...content });
            }}
          />
        </div>
        <div className="flex flex-row flex-wrap p-2 gap-2">
          <Input
            label="range"
            value={content.part_type_search_values.range}
            onChange={(e) => {
              content.part_type_search_values.range = Number(e.target.value);
              setContent({ ...content });
            }}
          />
          <Input
            label="weight"
            value={content.part_type_search_values.weight}
            onChange={(e) => {
              content.part_type_search_values.weight = Number(e.target.value);
              setContent({ ...content });
            }}
          />
          <Input
            label="velocity"
            value={content.part_type_search_values.velocity}
            onChange={(e) => {
              content.part_type_search_values.velocity = Number(e.target.value);
              setContent({ ...content });
            }}
          />
          <Input
            label="has_style_change"
            value={content.part_type_search_values.has_style_change}
            onChange={(e) => {
              content.part_type_search_values.has_style_change = Number(
                e.target.value
              );
              setContent({ ...content });
            }}
          />
        </div>
        <Input
          label="created_on"
          value={content.created_on}
          onChange={(e) => {
            setContent({ ...content, created_on: e.target.value });
          }}
        />
        <Input
          label="create_app_version"
          value={content.create_app_version}
          onChange={(e) => {
            setContent({ ...content, create_app_version: e.target.value });
          }}
        />
        <Input
          label="modified_on"
          value={content.modified_on}
          onChange={(e) => {
            setContent({ ...content, modified_on: e.target.value });
          }}
        />
        <Input
          label="creamodify_app_versionted_on"
          value={content.modify_app_version}
          onChange={(e) => {
            setContent({ ...content, modify_app_version: e.target.value });
          }}
        />
        <Input
          label="status"
          value={content.status}
          onChange={(e) => {
            setContent({ ...content, status: e.target.value });
          }}
        />
      </div>
      <div className="w-[100%] px-5 pt-5 flex flex-row justify-end border-t">
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            handleClickEdit(content);
          }}
        >
          決定
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ProductContent;
