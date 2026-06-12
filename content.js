// Hàm thực hiện thay đổi chữ trên mọi giao diện (A5, A6, A7)
function thayDoiChuXemHang() {
    // Cách 1: Tìm theo các Class phổ biến của ViettelPost (bao gồm f-7 và f-10)
    const elementsByClass = document.querySelectorAll('.box-dashed-red-f-7, .box-dashed-red-f-10, #xmg_note div, div[id="xmg_note"] div');
    
    elementsByClass.forEach(el => {
        if (el.textContent.includes("KHÔNG XEM HÀNG")) {
            el.textContent = " CHO XEM HÀNG ";
            el.style.fontWeight = "bold";
        }
    });

    // Cách 2: Dự phòng quét toàn bộ các thẻ div nhỏ lẻ khác, cứ thấy chữ KHÔNG XEM HÀNG là đổi sạch
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
        // Chỉ sửa các div chứa chữ trực tiếp, không chứa các thẻ con phức tạp bên trong
        if (div.children.length === 0 && div.textContent.trim() === "KHÔNG XEM HÀNG") {
            div.textContent = " CHO XEM HÀNG ";
            div.style.fontWeight = "bold";
        }
    });
}

// 1. Tự động chạy ngay khi trang web vừa tải xong
thayDoiChuXemHang();

// 2. Cứ mỗi 1 giây quét lại 1 lần phòng trường hợp đơn tải chậm
setInterval(thayDoiChuXemHang, 1000);