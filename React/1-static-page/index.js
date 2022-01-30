function Page() {
    return (
        <div>
            <img src="./react-logo.png" width="50px"></img>
            <h1>Fun Facts About React</h1>
            <ol>
                <li>First released in 2013</li>
                <li>Originally created by Jordan Walke</li>
                <li>Has 100K+ stars on Github</li>
                <li>Maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}



ReactDOM.render(<Page />, document.getElementById("root"));