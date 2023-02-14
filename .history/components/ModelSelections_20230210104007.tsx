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
      wash
    </div>
  )
}

export default ModelSelections
