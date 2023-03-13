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
    { value: "fotmat1", label: "Example Format 1" },
    { value: "fotmat2", label: "Example Format 2" },
    { value: "fotmat3", label: "Example Format 3" },
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

        async function updateItem(data: any) {

          const newItem = { ...data };

          newItem.dataQuery = await fetchFunction(data);


          setModal((oldValues) => {
            return { ...oldValues, isActive: false };
          });

          setDataItems(dataItems.map((element, index) => {

            if (index === itemIndex) {

              return newItem;

            }

            return element;

          }));

        }

        setModal({
          isActive: true,
          component: (
            <Form
              formTitle="Update Form"
              description="A esse aperiam sequi culpa voluptas."
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
          formTitle="Create Form"
          description="A esse aperiam sequi culpa voluptas."
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

  const formDataHandle = async (data: any) => {

    const newItem = { ...data };

    newItem.dataQuery = await fetchFunction(data);

    setDataItems((currentValues) => {
      return [...currentValues, newItem];
    });
    setModal((oldValues) => {
      return { ...oldValues, isActive: false };
    });
  };

  const fetchFunction = async (values: any) => {

    const { language, series, initDate, endDate } = values;

    const res = await fetch(`https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${series}/${initDate}/${endDate}?locale=${language}`, {
      headers: {
        "Authorization": `${process.env.NEXT_PUBLIC_API_TOKENOFTUKAN}`,
        "Bmx-Token": `${process.env.NEXT_PUBLIC_API_BMXTOKEN}`
      }
    });
    const json = await res.json();

    const dataQuery = json.bmx.series[0];

    return dataQuery;

  }

  return (
    <div className="m-3 static">
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
      "Authorization": `${process.env.NEXT_PUBLIC_API_TOKENOFTUKAN}`
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
