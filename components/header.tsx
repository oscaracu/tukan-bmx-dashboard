import Button from "./button";
import { BsDownload, BsGrid, BsListUl } from "react-icons/bs";

const headerBtnsStyles = "text-sky-900 text-3xl p-1 hover:bg-sky-800 hover:text-white rounded-md";
const paragraphStyle = "hidden";

function Header({ ...props }) {
    return (
        <header data-testid="app-header" className="flex flex-row gap-2 items-center justify-between mb-10 md:w-10/12 md:mx-auto">

            <h1 data-testid="app-title" className="text-2xl">Visualizations</h1>
            <div className=" flex flex-row gap-3 items-center">

                <Button btnType="button" testId="download-btn" clickHandle={props.clickHandle}>
                    <div className={headerBtnsStyles}><BsDownload /></div>
                    <p className={paragraphStyle}>Download all</p>
                </Button>
                <Button btnType="button" testId="grid-btn" clickHandle={props.clickHandle}>
                    <div className={headerBtnsStyles}><BsGrid /></div>
                    <p className={paragraphStyle}>Grid view</p>
                </Button>
                <Button btnType="button" testId="list-btn" clickHandle={props.clickHandle}>
                    <div className={headerBtnsStyles}><BsListUl /></div>
                    <p className={paragraphStyle}>List view</p>
                </Button>
            </div>

        </header>);
}

export default Header;