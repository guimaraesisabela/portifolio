document.getElementById("download-btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "/resumeIsabela.pdf";  // Substitua pelo caminho real
    link.download = "resumeIsabela.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
