import Button from "./button";

function Header({ ...props }) {
    return (
        <header data-testid="app-header">

            <h1 data-testid="app-title">Visualizations</h1>
            <Button btnType="button" testId="download-btn" clickHandle={props.clickHandle}>
                <p>Download all</p>
            </Button>
            <Button btnType="button" testId="grid-btn" clickHandle={props.clickHandle}>
                <p>Grid view</p>
            </Button>
            <Button btnType="button" testId="list-btn" clickHandle={props.clickHandle}>
                <p>List view</p>
            </Button>

        </header>);
}

export default Header;