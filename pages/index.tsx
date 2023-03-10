import DataCointainer from "@/components/dataContainer";
import Form from "@/components/form";
import Header from "@/components/header";
import Modal from "@/components/modal";
import SystemDescription from "@/components/systemDescription";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState({
    isActive: false,
    component: <SystemDescription />,
  });
  const [dataItems, setDataItems] = useState([
    { seriesTitle: "Example Title", data: "Series Data" },
  ]);

  const dataActions = [
    {
      testId: "move-action",
      text: "Move",
      btnType: "button",
      clickHandle: () => console.log("Move"),
    },
    {
      testId: "view-action",
      text: "View",
      btnType: "button",
      clickHandle: () => console.log("View"),
    },
    {
      testId: "edit-action",
      text: "Edit",
      btnType: "button",
      clickHandle: () => console.log("Edit"),
    },
    {
      testId: "delete-action",
      text: "Delete",
      btnType: "button",
      clickHandle: () => console.log("Delete"),
    },
    {
      testId: "download-action",
      text: "Download",
      btnType: "button",
      clickHandle: () => console.log("Download"),
    },
  ];

  const seriesOptions = [
    { value: "series1", label: "Data series 1" },
    { value: "series2", label: "Data series 2" },
    { value: "series3", label: "Data series 3" },
  ];

  const typeOptions = [
    { value: "type1", label: "Graph type 1" },
    { value: "type2", label: "Graph type 2" },
    { value: "type3", label: "Graph type 3" },
  ];

  const formatOptions = [
    { value: "fotmat1", label: "Format 1" },
    { value: "fotmat2", label: "Format 2" },
    { value: "fotmat3", label: "Format 3" },
  ];

  const addNewBtnClickHandle = () => {
    setModal({
      isActive: true,
      component: (
        <Form
          seriesOptions={seriesOptions}
          formatOptions={formatOptions}
          typeOptions={typeOptions}
          clickHandle={cancelBtnClickHandle}
          submitHandle={formDataHandle}
        />
      ),
    });
  };

  const cancelBtnClickHandle = () => {
    setModal((oldValues) => {
      return { ...oldValues, isActive: false };
    });
  };

  const formDataHandle = (data: any) => {
    setDataItems((currentValues) => {
      return [...currentValues, data];
    });
    setModal((oldValues) => {
      return { ...oldValues, isActive: false };
    });
  };

  return (
    <div>
      <Header />
      <DataCointainer
        dataItems={dataItems}
        dataActions={dataActions}
        clickHandle={addNewBtnClickHandle}
      />
      {modal.isActive ? <Modal childComponent={modal.component} /> : null}
    </div>
  );
}
