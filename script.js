const themeBtn = document.getElementById("themeBtn");
const printBtn = document.getElementById("printBtn");
const emailBtn = document.getElementById("emailBtn");
const topBtn = document.getElementById("topBtn");

// 1. Nút đổi giao diện sáng / tối
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙 Giao diện tối";
    } else {
        themeBtn.textContent = "☀️ Giao diện sáng";
    }
});

// 2. Nút xuất CV PDF
printBtn.addEventListener("click", function () {
    window.print();
});

// 3. Nút xem chi tiết dự án
document.querySelectorAll(".project-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const projectName = button.dataset.project;

        alert(
            "Dự án: " + projectName +
            "\n\nĐây là dự án học tập của mình. " +
            "Bạn có thể bổ sung đường dẫn sản phẩm thật tại đây."
        );
    });
});

// 4. Nút sao chép email
emailBtn.addEventListener("click", async function () {
    const email = "your.email@example.com";
    const notice = document.getElementById("notice");

    try {
        await navigator.clipboard.writeText(email);
        notice.textContent = "Đã sao chép email thành công!";
    } catch (error) {
        notice.textContent = "Email liên hệ: " + email;
    }
});

// 5. Hiệu ứng nội dung xuất hiện khi cuộn trang
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            entry.target.querySelectorAll(".progress").forEach(function (bar) {
                bar.style.width = bar.dataset.width;
            });

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(function (element) {
    observer.observe(element);
});

// 6. Nút quay lại đầu trang
window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});