function addAutoResize() {
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
        element.style.boxSizing = 'border-box';
        var offset = element.offsetHeight - element.clientHeight;
        element.addEventListener('input', function (event) {
            event.target.style.height = 'auto';
            event.target.style.height = event.target.scrollHeight + offset + 'px';
        });
        element.removeAttribute('data-autoresize');
    });
}

addAutoResize();

const key = "5f9c3f7f231ba42851b49f93";
const endpoint = "https://seriecommands-5a3b.restdb.io/rest/seriecommands";

function post(data) {
    const postData = JSON.stringify(data);
    fetch(endpoint, {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": key,
            "cache-control": "no-cache",
        },
        body: postData,
    });
    console.log(data);
}

const form = document.querySelector("form");
//form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("I have submitted?");
    const myData = {
        need_order: form.elements.need_order.value,
        product_type: form.elements.product_type.value,
        price_range: form.elements.price_range.value,
        product_size: form.elements.product_size.value,
        product_number: form.elements.product_number.value,
        crafting_lesson: form.elements.crafting_lesson.value,
        img_sample: form.elements.img_sample.value,
        company: form.elements.company.checked,
        email: form.elements.mail.value,
        comment_order: form.elements.comment_order.value,
    };
    /*
    */
    post(myData);
});