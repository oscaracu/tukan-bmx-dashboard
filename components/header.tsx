import Button from "./button";
import { BsDownload, BsGrid, BsListUl } from "react-icons/bs";

const headerBtnsStyles = "text-sky-900 text-3xl";
const paragraphStyle = "hidden";

function Header({ ...props }) {
    return (
        <header data-testid="app-header" className="flex flex-row gap-2 items-center justify-between">

            <h1 data-testid="app-title" className="text-2xl">Visualizations</h1>
            <div className=" flex flex-row gap-3 items-center">

                <Button btnType="button" testId="download-btn" clickHandle={props.clickHandle}>
                    <p className={paragraphStyle}>Download all</p>
                    <span className={headerBtnsStyles}>
                        <BsDownload />
                    </span>
                </Button>
                <Button btnType="button" testId="grid-btn" clickHandle={props.clickHandle}>
                    <p className={paragraphStyle}>Grid view</p>
                    <span className={headerBtnsStyles}>
                        <BsGrid />
                    </span>
                </Button>
                <Button btnType="button" testId="list-btn" clickHandle={props.clickHandle}>
                    <p className={paragraphStyle}>List view</p>
                    <span className={headerBtnsStyles}>
                        <BsListUl />
                    </span>
                </Button>
            </div>

        </header>);
}

export default Header;