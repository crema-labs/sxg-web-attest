const mergeElement = document.querySelector("#button-merge");

let endpoint =
    "https://github.crema.sh/grant/c27a7a48e799575689f1e75e7002577388c96c7534c465adfe86ef936793d80d";

mergeElement.addEventListener("click", async (e) => {
    e.preventDefault();

    let preMergeElements = document.querySelectorAll(".pre-merge");

    let idArray = window.crypto.getRandomValues(new Uint8Array(32));
    let id = "";
    idArray.forEach((byte) => {
        id += Number(byte).toString(16).padStart(2, "0");
    });

    await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log("wewe"));

    preMergeElements.forEach((mergeElement) => {
        mergeElement.setAttribute(
            "style",
            "display: none !important; transform: translateX(-25px);"
        );
    });

    let postMergeElements = document.querySelectorAll(".post-merge");

    postMergeElements.forEach((mergeElement) => {
        mergeElement.setAttribute("style", "display: block;");
    });
});
