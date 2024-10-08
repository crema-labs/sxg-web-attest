const mergeElement = document.querySelector("#button-merge");

let endpoint =
    "https://github.crema.sh/grant/ecd7449db3de829ac7f526e4e75f23e99af3ad8abc34b91d04cb546dbf3b6ffd";

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
