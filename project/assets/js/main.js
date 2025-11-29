document.addEventListener("DOMContentLoaded", () => {
    const logout = document.getElementById("logout");

    logout.addEventListener("click", () => {
        alert("Você saiu do sistema.");
        window.location.href = "login.html";
    });
});
