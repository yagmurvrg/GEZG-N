// ==========================================
// GEZGİN - ÜRÜN, DETAY VE SEPET SİSTEMİ
// ==========================================

const products = [
    {
        id: 1,
        name: "GEZGİN StormGuard Kamp Çadırı",
        category: "Kamp Ekipmanları",
        price: 7990,
        description: "Doğa gezileri ve kamp deneyimleri için tasarlanan GEZGİN StormGuard, dayanıklı malzeme tasarımı ve kullanışlı yapısıyla öne çıkar.",
        features: [
            "Dış kumaş: Ripstop polyester tasarımı",
            "Zemin: Oxford kumaş tasarımı",
            "Direkler: Alüminyum alaşım tasarımı",
            "Dikişler: Bantlı dikiş tasarımı",
            "Kullanım: Kamp ve doğa gezileri"
        ],
        colors: [
            { name: "Siyah", image: "cadirsiyah.png" },
            { name: "Lacivert", image: "cadirlacivert.png" },
            { name: "Yeşil", image: "cadiryesil.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Kamp gezileri için kullanışlı bir tasarım.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Görünümü ve renk seçenekleri güzel.", stars: 4 }
        ]
    },
    {
        id: 2,
        name: "GEZGİN Comfort Neck Boyun Yastığı",
        category: "Seyahat Konforu",
        price: 790,
        description: "Uzun yolculuklarda konfor düşünülerek tasarlanan boyun yastığı, ergonomik yapısıyla seyahatlerinizde rahat bir destek sunmayı hedefler.",
        features: [
            "Dolgu: Memory foam tasarımı",
            "Kılıf: Çıkarılabilir kumaş tasarımı",
            "Kullanım: Otobüs, uçak ve otomobil yolculukları",
            "Bakım: Kılıfın yıkanabilir olması hedeflenmiştir"
        ],
        colors: [
            { name: "Yeşil", image: "yastikyesil.png" },
            { name: "Lacivert", image: "yastiklacivert.png" },
            { name: "Siyah", image: "yastiksiyah.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Seyahat konseptine uygun, şık bir ürün.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Renk seçeneklerini beğendim.", stars: 4 }
        ]
    },
    {
        id: 3,
        name: "GEZGİN ThermoSleep Uyku Tulumu",
        category: "Kamp Ekipmanları",
        price: 3290,
        description: "Kamp ve açık hava etkinliklerinde uyku konforu düşünülerek tasarlanan ThermoSleep uyku tulumu, pratik taşıma özellikleriyle öne çıkar.",
        features: [
            "Dış yüzey: Ripstop polyester tasarımı",
            "İç yüzey: Polyester kumaş tasarımı",
            "Dolgu: Sentetik dolgu tasarımı",
            "Taşıma: Taşıma çantası konsepti",
            "Kullanım: Kamp ve doğa gezileri"
        ],
        colors: [
            { name: "Yeşil", image: "tulumyesil.png" },
            { name: "Siyah", image: "tulumsiyah.png" },
            { name: "Lacivert", image: "tulumlacivert.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Kamp ekipmanları arasında güzel bir seçenek.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Taşınabilir tasarımını beğendim.", stars: 4 }
        ]
    },
    {
        id: 4,
        name: "GEZGİN Adventure Kamp Sandalyesi",
        category: "Kamp Ekipmanları",
        price: 2790,
        description: "Kamp alanlarında, pikniklerde ve açık hava etkinliklerinde kullanılmak üzere tasarlanan katlanabilir kamp sandalyesi.",
        features: [
            "İskelet: Alüminyum alaşım tasarımı",
            "Kumaş: Oxford polyester tasarımı",
            "Dikiş: Güçlendirilmiş dikiş tasarımı",
            "Ayaklar: Kaymayı azaltmaya yönelik tasarım",
            "Kullanım: Kamp ve açık hava etkinlikleri"
        ],
        colors: [
            { name: "Lacivert", image: "sandalyelacivert.png" },
            { name: "Yeşil", image: "sandalyeyesil.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Kamp konseptine yakışan bir tasarım.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Renkleri oldukça güzel.", stars: 4 }
        ]
    },
    {
        id: 5,
        name: "GEZGİN Premium Valiz Düzenleyici",
        category: "Seyahat Düzenleyicileri",
        price: 699,
        description: "Valiz içerisinde düzenli bir yerleşim sağlamak için tasarlanan Premium Valiz Düzenleyici, seyahat eşyalarınızı kategorilere ayırmanıza yardımcı olur.",
        features: [
            "Tasarım: Premium kumaş görünümü",
            "Dikiş: Güçlendirilmiş dikiş tasarımı",
            "Fermuar: Dayanıklı fermuar konsepti",
            "Kullanım: Valiz içi eşya düzenleme",
            "Avantaj: Düzenli ve pratik yerleşim"
        ],
        colors: [
            { name: "Siyah", image: "valizduzenleyicisiyah.png" },
            { name: "Beyaz", image: "valizduzenleyicibeyaz.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Seyahat düzeni için şık bir tasarım.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Valiz içinde düzen sağlamaya yönelik güzel bir ürün.", stars: 4 }
        ]
    },
    {
        id: 6,
        name: "GEZGİN Premium Seyahat Çantası",
        category: "Seyahat Çantaları",
        price: 1999,
        description: "Kısa ve uzun yolculuklarda ihtiyaç duyulan eşyaları taşımak için tasarlanan Premium Seyahat Çantası, geniş kullanım alanı ve modern görünümüyle öne çıkar.",
        features: [
            "Malzeme: Dayanıklı kumaş tasarımı",
            "Dikiş: Güçlendirilmiş dikiş detayları",
            "Fermuar: Sağlam fermuar konsepti",
            "Tasarım: Kullanışlı iç hacim",
            "Kullanım: Günlük seyahat ve hafta sonu gezileri"
        ],
        colors: [
            { name: "Siyah", image: "seyahatcantasisiyah.png" },
            { name: "Yeşil", image: "seyahatcantasiyesil.png" },
            { name: "Lacivert", image: "seyahatcantasilacivert.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Modern ve kullanışlı bir seyahat tasarımı.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Renk seçenekleri oldukça güzel.", stars: 4 }
        ]
    },
    {
        id: 7,
        name: "GEZGİN ThermoPro Premium Termos",
        category: "Seyahat Aksesuarları",
        price: 1499,
        description: "Seyahatlerde, kamp alanlarında ve günlük kullanımda içeceklerinizi yanınızda taşımanız için tasarlanan premium termos.",
        features: [
            "Gövde: Paslanmaz çelik tasarımı",
            "Kapak: Sızdırmayı azaltmaya yönelik kapak tasarımı",
            "Yapı: Ergonomik tutuş",
            "Tasarım: Modern ve kompakt görünüm",
            "Kullanım: Seyahat, kamp ve günlük yaşam"
        ],
        colors: [
            { name: "Siyah", image: "termossiyah.png" },
            { name: "Yeşil", image: "termosyesil.png" },
            { name: "Lacivert", image: "termoslacivert.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Şık ve modern termos tasarımı.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Seyahat konseptine çok uygun.", stars: 4 }
        ]
    },
    {
        id: 8,
        name: "GEZGİN NightBeam Kamp Lambası",
        category: "Kamp Ekipmanları",
        price: 1290,
        description: "Kamp ve açık hava etkinliklerinde aydınlatma ihtiyacı düşünülerek tasarlanan NightBeam kamp lambası, taşınabilir yapısıyla öne çıkar.",
        features: [
            "Tasarım: Kompakt ve taşınabilir gövde",
            "Aydınlatma: LED aydınlatma konsepti",
            "Gövde: Dayanıklı dış yüzey tasarımı",
            "Kullanım: Kamp ve açık hava etkinlikleri",
            "Taşıma: Pratik taşıma yapısı"
        ],
        colors: [
            { name: "Standart", image: "kamplambasi.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Kamp ekipmanları için güzel bir tamamlayıcı.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Kompakt tasarımını beğendim.", stars: 4 }
        ]
    },
    {
        id: 9,
        name: "GEZGİN SleepComfort Uyku Göz Bandı",
        category: "Seyahat Konforu",
        price: 699,
        description: "Uçak, otobüs ve diğer yolculuklarda dinlenme konforunu desteklemek amacıyla tasarlanan SleepComfort uyku göz bandı.",
        features: [
            "Malzeme: Yumuşak kumaş tasarımı",
            "Yapı: Ergonomik göz çevresi tasarımı",
            "Bant: Ayarlanabilir bant konsepti",
            "Kullanım: Seyahat ve dinlenme",
            "Tasarım: Hafif ve taşınabilir yapı"
        ],
        colors: [
            { name: "Siyah", image: "uykugozbandisiyah.png" },
            { name: "Lacivert", image: "uykugozbandilacivert.png" },
            { name: "Yeşil", image: "uykugozbandiyesil.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Seyahat konforu için sade ve şık bir ürün.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Hafif tasarımını beğendim.", stars: 4 }
        ]
    },
    {
        id: 10,
        name: "GEZGİN AdventurePro Sırt Çantası",
        category: "Seyahat Çantaları",
        price: 2499,
        description: "Doğa gezileri, günlük kullanım ve seyahatler için tasarlanan AdventurePro sırt çantası, kullanışlı bölmeleri ve ergonomik tasarımıyla öne çıkar.",
        features: [
            "Malzeme: Dayanıklı kumaş tasarımı",
            "Bölmeler: Çok bölmeli iç tasarım",
            "Askılar: Ergonomik omuz askısı konsepti",
            "Dikiş: Güçlendirilmiş dikiş detayları",
            "Kullanım: Seyahat, kamp ve günlük yaşam"
        ],
        colors: [
            { name: "Yeşil", image: "sirtcantasiyesil.png" },
            { name: "Lacivert", image: "sirtcantasilacivert.png" },
            { name: "Siyah", image: "sirtcantasisiyah.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Günlük kullanım ve seyahat için güzel bir tasarım.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Bölmeli yapısı oldukça kullanışlı görünüyor.", stars: 4 }
        ]
    },
    {
        id: 11,
        name: "GEZGİN StormShield Premium Yağmurluk",
        category: "Outdoor Giyim",
        price: 2299,
        description: "Açık hava gezileri ve doğa yürüyüşleri için tasarlanan StormShield yağmurluk, fonksiyonel tasarımı ve rahat kullanım yapısıyla öne çıkar.",
        features: [
            "Malzeme: Dış mekâna uygun kumaş tasarımı",
            "Kapüşon: Koruyucu kapüşon konsepti",
            "Fermuar: Ön kapama sistemi",
            "Yapı: Hafif ve rahat kesim",
            "Kullanım: Doğa yürüyüşleri ve seyahat"
        ],
        colors: [
            { name: "Lacivert", image: "yagmurluklacivert.png" },
            { name: "Yeşil", image: "yagmurlukyesil.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Outdoor tarzına uygun bir tasarım.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Renk seçeneklerini beğendim.", stars: 4 }
        ]
    },
    {
        id: 12,
        name: "GEZGİN PowerGo Taşınabilir Şarj Cihazı",
        category: "Teknoloji ve Seyahat",
        price: 1999,
        description: "Seyahatlerde ve günlük yaşamda elektronik cihazlarınızı desteklemek amacıyla tasarlanan PowerGo taşınabilir şarj cihazı.",
        features: [
            "Tasarım: Kompakt taşınabilir gövde",
            "Bağlantı: Şarj bağlantı noktası tasarımı",
            "Kullanım: Seyahat ve günlük yaşam",
            "Yapı: Kolay taşınabilir tasarım",
            "Güvenlik: Teknik güvenlik özellikleri ürün modeline göre doğrulanmalıdır"
        ],
        colors: [
            { name: "Beyaz", image: "tasarilebilirsarjcihazibeyaz.png" },
            { name: "Siyah", image: "tasarilebilirsarjcihazisiyah.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Seyahatlerde kullanışlı olabilecek bir tasarım.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Kompakt görünümünü beğendim.", stars: 4 }
        ]
    }
];


// ==========================================
// GENEL FONKSİYONLAR
// ==========================================

function formatPrice(price) {
    return price.toLocaleString("tr-TR") + " TL";
}

let cart = JSON.parse(localStorage.getItem("gezginCart")) || [];

function saveCart() {
    localStorage.setItem("gezginCart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const countElement = document.getElementById("cart-count");

    if (countElement) {
        const totalCount = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        countElement.textContent = totalCount;
    }
}


// ==========================================
// ÜRÜNLER SAYFASI - ARAMA VE FİLTRELEME
// ==========================================

function renderProducts() {
    const productList = document.getElementById("product-list");

    if (!productList) return;

    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");

    const searchText = searchInput
        ? searchInput.value.toLocaleLowerCase("tr-TR").trim()
        : "";

    const selectedCategory = categoryFilter
        ? categoryFilter.value
        : "all";

    const selectedSort = sortFilter
        ? sortFilter.value
        : "default";

    let filteredProducts = products.filter(product => {

        const searchableText = (
            product.name + " " + product.category + " " + product.description
        ).toLocaleLowerCase("tr-TR");

        const matchesSearch = searchableText.includes(searchText);

        let matchesCategory = true;

        if (selectedCategory === "kamp") {
            matchesCategory = product.category === "Kamp Ekipmanları";
        }

        if (selectedCategory === "seyahat") {
            matchesCategory = [
                "Seyahat Konforu",
                "Seyahat Düzenleyicileri",
                "Seyahat Çantaları"
            ].includes(product.category);
        }

        if (selectedCategory === "outdoor") {
            matchesCategory = [
                "Outdoor Yaşam",
                "Outdoor Giyim"
            ].includes(product.category);
        }

        if (selectedCategory === "aksesuar") {
            matchesCategory = [
                "Seyahat Aksesuarları",
                "Teknoloji ve Seyahat"
            ].includes(product.category);
        }

        return matchesSearch && matchesCategory;
    });

    if (selectedSort === "low-high") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (selectedSort === "high-low") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (selectedSort === "az") {
        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name, "tr")
        );
    }

    if (selectedSort === "za") {
        filteredProducts.sort((a, b) =>
            b.name.localeCompare(a.name, "tr")
        );
    }

    productList.innerHTML = filteredProducts.map(product => `
        <div class="product-card">

            <a href="urun-detay.html?id=${product.id}">
                <img
                    src="images/${product.colors[0].image}"
                    alt="${product.name}"
                >
            </a>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <p class="product-price">
                    ${formatPrice(product.price)}
                </p>

                <label for="color-${product.id}">
                    Renk seçeneği:
                </label>

                <select
                    id="color-${product.id}"
                    onchange="changeProductColor(${product.id}, this.value)"
                >
                    ${product.colors.map((color, index) => `
                        <option value="${index}">
                            ${color.name}
                        </option>
                    `).join("")}
                </select>

                <button
                    class="product-button"
                    onclick="addToCart(${product.id})"
                >
                    Sepete Ekle
                </button>

                <a
                    href="urun-detay.html?id=${product.id}"
                    class="detail-button"
                >
                    Detayları İncele
                </a>

            </div>
        </div>
    `).join("");

    const resultCount = document.getElementById("product-result-count");

    if (resultCount) {
        resultCount.textContent =
            filteredProducts.length + " ürün listeleniyor.";
    }

    const noProducts = document.getElementById("no-products");

    if (noProducts) {
        noProducts.style.display =
            filteredProducts.length === 0 ? "block" : "none";
    }
}

function setupProductFilters() {
    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");

    if (searchInput) {
        searchInput.addEventListener("input", renderProducts);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener("change", renderProducts);
    }

    if (sortFilter) {
        sortFilter.addEventListener("change", renderProducts);
    }
}

function changeProductColor(productId, colorIndex) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    const selectedColor = product.colors[Number(colorIndex)];

    const image = document.querySelector(
        `#product-list img[alt="${product.name}"]`
    );

    if (image) {
        image.src = "images/" + selectedColor.image;
    }
}


// ==========================================
// ÜRÜN DETAY SAYFASI
// ==========================================

function renderProductDetail() {
    const detailName = document.getElementById("detail-name");

    if (!detailName) return;

    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));

    const product = products.find(item => item.id === productId);

    if (!product) {
        const detailArea = document.querySelector(".product-detail");

        if (detailArea) {
            detailArea.innerHTML = `
                <h2>Ürün bulunamadı.</h2>
                <a href="urunler.html">Ürünlere geri dön</a>
            `;
        }

        return;
    }

    document.title = product.name + " | GEZGİN";

    document.getElementById("detail-category").textContent = product.category;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-rating-text").textContent = "Örnek değerlendirme";
    document.getElementById("detail-price").textContent = formatPrice(product.price);
    document.getElementById("detail-description").textContent = product.description;

    const colorSelect = document.getElementById("detail-color");

    colorSelect.innerHTML = product.colors.map((color, index) => `
        <option value="${index}">${color.name}</option>
    `).join("");

    const mainImage = document.getElementById("detail-image");

    mainImage.src = "images/" + product.colors[0].image;
    mainImage.alt = product.name;

    renderThumbnails(product);

    const features = document.getElementById("detail-features");

    features.innerHTML = product.features.map(feature => `
        <li>${feature}</li>
    `).join("");

    const reviews = document.getElementById("detail-reviews");

    reviews.innerHTML = `
        <p class="review-disclaimer">
            Aşağıdaki yorumlar site tasarımı için hazırlanmış örnek
            içeriklerdir; gerçek müşteri değerlendirmesi değildir.
        </p>

        ${product.reviews.map(review => `
            <div class="review-card">
                <div class="review-stars">${"★".repeat(review.stars)}</div>
                <p>${review.text}</p>
                <strong>${review.name}</strong>
            </div>
        `).join("")}
    `;

    colorSelect.addEventListener("change", function() {
        const selectedIndex = Number(this.value);

        mainImage.src = "images/" + product.colors[selectedIndex].image;

        renderThumbnails(product, selectedIndex);
    });

    const addButton = document.getElementById("detail-add-button");

    addButton.onclick = function() {
        const selectedIndex = Number(colorSelect.value);
        addProductToCart(product, selectedIndex);
    };

    setupImageZoom();
}


// ==========================================
// KÜÇÜK ÜRÜN GÖRSELLERİ
// ==========================================

function renderThumbnails(product, activeIndex = 0) {
    const thumbnailList = document.getElementById("thumbnail-list");

    if (!thumbnailList) return;

    thumbnailList.innerHTML = product.colors.map((color, index) => `
        <img
            src="images/${color.image}"
            alt="${color.name}"
            class="product-thumbnail ${index === activeIndex ? "active" : ""}"
            onclick="selectDetailImage('${color.image}', this)"
        >
    `).join("");
}

function selectDetailImage(imageName, element) {
    const mainImage = document.getElementById("detail-image");

    if (mainImage) {
        mainImage.src = "images/" + imageName;
    }

    document.querySelectorAll(".product-thumbnail").forEach(image => {
        image.classList.remove("active");
    });

    element.classList.add("active");
}


// ==========================================
// GÖRSEL BÜYÜTME
// ==========================================

function setupImageZoom() {
    const container = document.getElementById("zoom-container");
    const image = document.getElementById("detail-image");

    if (!container || !image) return;

    container.addEventListener("mousemove", function(event) {
        const rect = container.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        image.style.transformOrigin = `${x}% ${y}%`;
        image.style.transform = "scale(2)";
    });

    container.addEventListener("mouseleave", function() {
        image.style.transform = "scale(1)";
    });
}


// ==========================================
// SEPETE EKLEME
// ==========================================

function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    const colorSelect = document.getElementById(`color-${productId}`);
    const colorIndex = colorSelect ? Number(colorSelect.value) : 0;

    addProductToCart(product, colorIndex);
}

function addProductToCart(product, colorIndex) {
    const selectedColor = product.colors[colorIndex];

    if (!selectedColor) return;

    const existingItem = cart.find(item =>
        item.productId === product.id &&
        item.color === selectedColor.name
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            color: selectedColor.name,
            image: selectedColor.image,
            quantity: 1
        });
    }

    saveCart();
    renderCart();

    alert("Ürün sepetinize eklendi!");
}


// ==========================================
// SEPET SAYFASI
// ==========================================

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Sepetiniz henüz boş.</h3>
                <p>Beğendiğiniz ürünleri keşfetmeye başlayın.</p>
                <a href="urunler.html" class="product-button">
                    Alışverişe Başla
                </a>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">

                <img
                    src="images/${item.image}"
                    alt="${item.name}"
                    class="cart-product-image"
                >

                <div class="cart-product-info">
                    <h3>${item.name}</h3>
                    <p>Renk: ${item.color}</p>
                    <p>Birim fiyat: ${formatPrice(item.price)}</p>
                </div>

                <div class="quantity-controls">
                    <button onclick="changeQuantity(${index}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>

                <strong>${formatPrice(item.price * item.quantity)}</strong>

                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})"
                >
                    Kaldır
                </button>

            </div>
        `).join("");
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    cartTotal.textContent = formatPrice(total);

    const subtotal = document.getElementById("cart-subtotal");

    if (subtotal) {
        subtotal.textContent = formatPrice(total);
    }
}


// ==========================================
// ADET DEĞİŞTİRME VE ÜRÜN SİLME
// ==========================================

function changeQuantity(index, amount) {
    if (!cart[index]) return;

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);

    saveCart();
    renderCart();
}


// ==========================================
// KAMPANYA SLIDER
// ==========================================

function setupCampaignSlider() {
    const slides = document.querySelectorAll(".campaign-slide");

    if (slides.length === 0) return;

    let currentSlide = 0;

    setInterval(function() {
        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
    }, 4000);
}


// ==========================================
// SAYFA YÜKLENDİĞİNDE
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    setupProductFilters();
    renderProducts();
    renderProductDetail();
    renderCart();
    updateCartCount();
    setupCampaignSlider();
});