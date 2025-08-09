import React from "react";

import MySelect from "../components/UI/select/MySelect";
import MyInput from "../components/UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder="Пошук ..."
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортування по"
        options={[
          {value: "title", name: "По назві"},
          {value: "body", name: "По списку"},
        ]}
      />
    </div>
  );
};
export default PostFilter;
