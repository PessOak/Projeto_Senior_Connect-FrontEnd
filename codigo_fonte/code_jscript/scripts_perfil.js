function logOut() {
    localStorage.removeItem("usuario_logado");
    window.location.href = "html_home.html";
};