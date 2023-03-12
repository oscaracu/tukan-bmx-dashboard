import DataCointainer from "@/components/dataContainer";
import Form from "@/components/form";
import Header from "@/components/header";
import Modal from "@/components/modal";
import SystemDescription from "@/components/systemDescription";
import { FormValues } from "models/FormValues";
import { useState } from "react";
import { BsArrowsMove, BsEye, BsPencilSquare, BsTrash, BsDownload } from "react-icons/bs";

interface SerieValues {
  variable: string;
  display_name: string;
  display_name_en: string;
  unit_id: string
}

export default function Home({ ...props }) {

  const seriesOptions = props.seriesCatalog ? props.seriesCatalog.map((element: SerieValues) => { return { value: element.variable, label: element.display_name_en, label_es: element.display_name } }) : [];

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


  const [modal, setModal] = useState({
    isActive: false,
    component: <SystemDescription />,
  });
  const [dataItems, setDataItems] = useState<FormValues[]>([]);

  const dataActions = [
    {
      testId: "move-action",
      text: "Move",
      btnType: "button",
      clickHandle: () => console.log("Move"),
      icon: <BsArrowsMove />
    },
    {
      testId: "view-action",
      text: "View",
      btnType: "button",
      clickHandle: () => console.log("View"),
      icon: <BsEye />
    },
    {
      testId: "edit-action",
      text: "Edit",
      btnType: "button",
      icon: <BsPencilSquare />,
      clickHandle: (id: string) => {

        const itemIndex = dataItems.findIndex((item: FormValues) => item.id === id);

        function updateItem(data: FormValues) {

          setModal((oldValues) => {
            return { ...oldValues, isActive: false };
          });

          setDataItems(dataItems.map((element, index) => {

            if (index === itemIndex) {

              return data;

            }

            return element;

          }));

        }

        setModal({
          isActive: true,
          component: (
            <Form
              seriesOptions={seriesOptions}
              formatOptions={formatOptions}
              typeOptions={typeOptions}
              clickHandle={cancelBtnClickHandle}
              submitHandle={updateItem}
              data={dataItems[itemIndex]}
            />
          ),
        });

      },
    },
    {
      testId: "delete-action",
      text: "Delete",
      btnType: "button",
      icon: <BsTrash />,
      clickHandle: (id: string) => {
        setDataItems(oldvalues => { return oldvalues.filter((element) => element.id !== id) })
      },
    },
    {
      testId: "download-action",
      text: "Download",
      btnType: "button",
      clickHandle: () => console.log("Download"),
      icon: <BsDownload />
    },
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
    <div className="m-3">
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

export async function getStaticProps() {

  const res = await fetch('https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/', {
    headers: {
      "Authorization": `${process.env.API_TOKENOFTUKAN}`
    }
  })
  const json = await res.json();
  const seriesCatalog = json.data;

  return {
    props: {
      seriesCatalog,
    },
  }
}
