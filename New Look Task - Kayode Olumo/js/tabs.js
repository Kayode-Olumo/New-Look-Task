let tabButtons = document.querySelectorAll(".tab-container .btn-container button");
let tabPanels = document.querySelectorAll(".tab-container .tab-panel");

function showPanel(panelIndex,colorCode){
    tabButtons.forEach((node) => {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "#34e5e2";
    tabPanels.forEach((node) => {
        node.style.display = "none";
        node
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, '#2a3344');