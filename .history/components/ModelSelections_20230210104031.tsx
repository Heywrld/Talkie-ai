"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelections() {
    const { data: models, isLoading } = useSWR("model", fetchModels );
    const { data: model, mutate: setModel } = useSWR("models", {
        fallbackData: 'text-davinci-003'
    })

  return (
    <div className=" mt-2">
      <Select 
       className=" mt-2"
       options={models?.modelOptions}
       defaultValue={model}
        placeholder={model}
       isSearchable
       isLoading={isLoading}
       menuPosition='fixed'
       classNames={{
          control: (state) => "bg-[#EBC7E6] border-[#434654]"
       }}
       onChange={(e) => setModel(e.value)}
      />
    </div>
  )
}

export default ModelSelections
