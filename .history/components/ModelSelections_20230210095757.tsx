"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelections() {
    const { data: models, isLoading } = useSWR("models", fetchModels );
    const { data: model, mutate: setModel } = useSWR("models", {
        fallbackData: 'text-davinci-003'
    })

  return (
    <div>
      <Select 
       className=" mt-2"
       options={models?.modelOptions}
       defaultValue={model}
        placeholder={}
       isSearchable
       isLoading={isLoading}
       menuPosition='fixed'
       classNames={{
          control: (state) => "bg-[#434654] border-[#434654]"
       }}
      />
    </div>
  )
}

export default ModelSelections
