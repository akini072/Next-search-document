export interface InitSearchProps {
  budget: number;
  startDate: string;
  endDate: string;
  square: number;
}

export interface SearchOptionType {
  budget: number;
  startDate: string;
  endDate: string;
  square: number;
}

export interface DetailSearchOption {
  mass: number;
  length: number;
  speed: number;
}

export interface ProductType {
  id?: number;
  part_type?: number | string;
  part_name?: string;
  icad_file_path?: string;
  icad_file_path_display?: string;
  urdf_file_path?: string;
  maker?: string;
  model_no?: string;
  standard_delivery_period?: string;
  cost: number;
  combination_factor?: string;
  memo?: string;
  thumbnail_image_path: string;
  thumbnail_base_image_path?: string;
  part_name_display?: string;
  part_description_display?: string;
  cost_display?: string;
  part_type_custom_values: {
    body_weight: number;
    required_voltage?: number | string;
    max_carrable_weight?: number;
    max_reachable_range?: number;
  };
  part_type_search_values: {
    range?: number;
    weight?: number;
    velocity?: number;
    has_style_change?: number | string;
  };
  created_on: string;
  create_app_version?: string | undefined;
  modified_on: string;
  modify_app_version?: string;
  status: string;
  tab_info: number;
  group_number?: 0;
}

export interface GroupItemType {
  group_id: number;
  children: ProductType[];
}
