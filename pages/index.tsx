import DataCointainer from "@/components/dataContainer";
import Header from "@/components/header";
import Modal from "@/components/modal";

export default function Home() {

  const dataItems = [
    {
      seriesTitle: "Visualization Series Title 1",
      data: "Series Data received by props 1",
    },
    {
      seriesTitle: "Visualization Series Title 2",
      data: "Series Data received by props 2",
    },
    {
      seriesTitle: "Visualization Series Title 3",
      data: "Series Data received by props 3",
    },

  ];

  const dataActions = [
    {
      testId: "move-action",
      text: "Move",
      btnType: "button",
      clickHandle: () => console.log("Move")

    },
    {
      testId: "view-action",
      text: "View",
      btnType: "button",
      clickHandle: () => console.log("View")


    },
    {
      testId: "edit-action",
      text: "Edit",
      btnType: "button",
      clickHandle: () => console.log("Edit")

    },
    {
      testId: "delete-action",
      text: "Delete",
      btnType: "button",
      clickHandle: () => console.log("Delete")

    },
    {
      testId: "download-action",
      text: "Download",
      btnType: "button",
      clickHandle: () => console.log("Download")
    }]

  return <div>
    <Header />
    <DataCointainer dataItems={dataItems} dataActions={dataActions} />
    <Modal />

  </div>
}
