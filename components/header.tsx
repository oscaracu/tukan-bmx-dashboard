import Button from "./button";

function Header({ ...props }) {
    return (
        <header data-testid="app-header">

            <h1 data-testid="app-title">Visualizations</h1>
            <Button btnType="button" text="Download all" testId="download-btn" clickHandle={props.clickHandle} />
            <Button btnType="button" text="Grid view" testId="grid-btn" clickHandle={props.clickHandle} />
            <Button btnType="button" text="List view" testId="list-btn" clickHandle={props.clickHandle} />

        </header>);
}

export default Header;