const faq_items = document.querySelectorAll(".faq-item");
const faq_buttons = document.querySelectorAll(".faq-button");
const faq_titles = document.querySelectorAll(".faq-header-title");

faq_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let i = button.getAttribute("faq-item-i");
        let faq_item = faq_items[i];

        if(faq_item.classList.contains("hidden")) {
            faq_item.classList.remove("hidden");
        } else {
            faq_item.classList.add("hidden");
        }
        
    });
});

faq_titles.forEach((title) => {
    title.addEventListener('click', () => {
        let i = title.getAttribute("faq-item-i");
        let faq_item = faq_items[i];

        if(faq_item.classList.contains("hidden")) {
            faq_item.classList.remove("hidden");
        } else {
            faq_item.classList.add("hidden");
        }
        
    });
});