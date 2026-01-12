
// const heading = React.createElement("h1", {}, "Hello World from React");
// console.log(heading); // You will get a React Element object like: type, props


/*
React Element means:
It is a description of what should appear on the UI
NOT the real DOM element
NOT HTML

ReactElement (Object) = HTML (  Browser Understant )
*/

/* structure like: 
<div id="root">
    <div id="parent">
        <div id="child">
            <h1>I am h1 tag</h1>
            <h2>I am h2 tag</h2>
        </div>
    </div>
</div>
*/

// const nestedDiv = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         [React.createElement("h1", {}, "First Tag"), React.createElement("h2", {}, "Second Tag")] // Display 2 tags or nested element
//     )
// );

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "heading_1", class: "text-3xl text-red-600 font-bold underline bg-sky-900" }, "Heading 1"),
        React.createElement("h2", { id: "heading_2", class: "text-3xl text-red-600 font-bold underline bg-red-900" }, "Heading 2"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading_1" }, "Heading 1"),
        React.createElement("h2", { id: "heading_2" }, "Heading 2"),
    ]),
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(nestedDiv);

root.render(parent);
