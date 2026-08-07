// Consolidated script with discounts, overlays, cart & wishlist persistence

// Product data using local images (placed in ./images/)
const products = [
	{ id: 1, title: 'Lipstick', category: 'makeup', price: 19, img: './images/Lipstick 1.jpg', desc: 'Long-lasting matte lipstick available in several shades.' },
	{ id: 2, title: 'Lipstick', category: 'makeup', price: 19, img: './images/Lipstick 2.jpg', desc: 'Long-lasting matte lipstick available in several shades.' },
	{ id: 3, title: 'Lipstick', category: 'makeup', price: 19, img: './images/Lipstick 3.jpg', desc: 'Long-lasting matte lipstick available in several shades.' },
	{ id: 4, title: 'Lipstick', category: 'makeup', price: 19, img: './images/Lipstick 4.jpg', desc: 'Long-lasting matte lipstick available in several shades.' },
	{ id: 5, title: 'Lipstick', category: 'makeup', price: 19, img: './images/Lipstick 5.jpg', desc: 'Long-lasting matte lipstick available in several shades.' },
	{ id: 6, title: 'Lipstick', category: 'makeup', price: 19, img: './images/Lipstick 6.jpg', desc: 'Long-lasting matte lipstick available in several shades.' },
	{ id: 7, title: 'Lipstick', category: 'makeup', price: 19, img: './images/Lipstick 7.jpg', desc: 'Long-lasting matte lipstick available in several shades.' },
	{ id: 8, title: 'Lipstick', category: 'makeup', price: 19, img: './images/Lipstick.jpg', desc: 'Long-lasting matte lipstick available in several shades.' },
	{ id: 9, title: 'Bangle', category: 'accessories', price: 29, img: './images/Bangle 1.jpg', desc: 'Lovely bangle with intricate designs.' },
	{ id: 10, title: 'Bangle', category: 'accessories', price: 29, img: './images/Bangle 2.jpg', desc: 'Lovely bangle with intricate designs.' },
	{ id: 11, title: 'Bangle', category: 'accessories', price: 29, img: './images/Bangle 3.jpg', desc: 'Lovely bangle with intricate designs.' },
	{ id: 12, title: 'Ring', category: 'accessories', price: 39, img: './images/Ring.jpg', desc: 'Elegant ring made from quality materials.' },
	{ id: 13, title: 'Bracelet', category: 'accessories', price: 49, img: './images/Bracelet.jpg', desc: 'Elegant bracelet made from quality materials.' },
	{ id: 14, title: 'Foundation', category: 'makeup', price: 25, img: './images/Foundation.jpg', desc: 'Smooth-finish foundation for all skin types.' },
	{ id: 15, title: 'Foundation', category: 'makeup', price: 25, img: './images/Foundation 1.jpg', desc: 'Smooth-finish foundation for all skin types.' },
	{ id: 16, title: 'Foundation', category: 'makeup', price: 25, img: './images/Foundation 2.jpg', desc: 'Smooth-finish foundation for all skin types.' },
	{ id: 17, title: 'Eye Liner', category: 'makeup', price: 25, img: './images/Eye Liner.jpg', desc: 'Long-lasting eye liner for a bold look.' },
	{ id: 18, title: 'Handbag', category: 'handbag', price: 89, img: './images/Handbag.jpg', desc: 'Stylish handbag with multiple compartments.' },
	{ id: 19, title: 'Handbag', category: 'handbag', price: 89, img: './images/Handbag 1.jpg', desc: 'Stylish handbag with multiple compartments.' },
	{ id: 20, title: 'Handbag', category: 'handbag', price: 89, img: './images/Handbag 2.jpg', desc: 'Stylish handbag with multiple compartments.' },
	{ id: 21, title: 'Handbag', category: 'handbag', price: 89, img: './images/Handbag 4.jpg', desc: 'Stylish handbag with multiple compartments.' },
	{ id: 22, title: 'Handbag', category: 'handbag', price: 89, img: './images/Handbag 5.jpg', desc: 'Stylish handbag with multiple compartments.' },
	{ id: 23, title: 'Handbag', category: 'handbag', price: 89, img: './images/Handbag 6.jpg', desc: 'Stylish handbag with multiple compartments.' },
	{ id: 24, title: 'Handbag', category: 'handbag', price: 89, img: './images/Handbag 7.jpg', desc: 'Stylish handbag with multiple compartments.' },
	{ id: 25, title: 'Handbag', category: 'handbag', price: 89, img: './images/Handbag 8.jpg', desc: 'Stylish handbag with multiple compartments.' },
	{ id: 26, title: 'Saree Classic', category: 'women-sarees', price: 129, img: './images/Saree.jpg', desc: 'Beautiful saree with vibrant traditional designs.' },
	{ id: 27, title: 'Saree Floral', category: 'women-sarees', price: 130, img: './images/Saree 1.jpg', desc: 'Floral saree with premium silk finish.' },
	{ id: 28, title: 'Saree Festive', category: 'women-sarees', price: 139, img: './images/Saree 2.jpg', desc: 'Perfect festive saree with intricate patterns.' },
	{ id: 29, title: 'Saree Party', category: 'women-sarees', price: 135, img: './images/Saree 3.jpg', desc: 'Gorgeous party wear saree with shimmer details.' },
	{ id: 30, title: 'Traditional Saree', category: 'women-sarees', price: 149, img: './images/Saree 6.jpg', desc: 'Designer saree with luxurious drape.' },
	{ id: 31, title: 'Watch Classic', category: 'watches', price: 99, img: './images/Watch.jpg', desc: 'Classic leather watch with timeless style.' },
	{ id: 32, title: 'Watch Sport', category: 'watches', price: 109, img: './images/Watch 1.jpg', desc: 'Sporty watch built for active lifestyles.' },
	{ id: 33, title: 'Watch Minimal', category: 'watches', price: 95, img: './images/Watch 2.jpg', desc: 'Minimal watch for everyday elegance.' },
	{ id: 34, title: 'Watch Silver', category: 'watches', price: 115, img: './images/Watch 3.jpg', desc: 'Silver-tone watch with polished finish.' },
	{ id: 35, title: 'Watch Chrono', category: 'watches', price: 129, img: './images/Watch 4.jpg', desc: 'Chronograph watch with premium build.' },
	{ id: 36, title: 'Watch Luxe', category: 'watches', price: 139, img: './images/Watch 5.jpg', desc: 'Luxury watch with premium accents.' },
	{ id: 37, title: 'Mens Shirt', category: 'men-shirts', price: 39, img: './images/Mens Shirt.jpg', desc: 'Smart casual shirt for everyday wear.' },
	{ id: 38, title: 'Mens Shirt', category: 'men-shirts', price: 39, img: './images/Men Shirt 1.jpg', desc: 'Smart casual shirt for everyday wear.' },
	{ id: 39, title: 'Mens Shirt', category: 'men-shirts', price: 39, img: './images/Men Shirt 2.jpg', desc: 'Smart casual shirt for everyday wear.' },
	{ id: 40, title: 'Mens Shirt', category: 'men-shirts', price: 39, img: './images/Men Shirt 3.jpg', desc: 'Smart casual shirt for everyday wear.' },
	{ id: 41, title: 'Mens Shirt', category: 'men-shirts', price: 39, img: './images/Men Shirt 4.jpg', desc: 'Smart casual shirt for everyday wear.' },
	{ id: 42, title: 'Mens Shirt', category: 'men-shirts', price: 39, img: './images/Men Shirt 5.jpg', desc: 'Smart casual shirt for everyday wear.' },
	{ id: 43, title: 'Backpack', category: 'accessories', price: 49, img: './images/Backpack.jpg', desc: 'Durable backpack with laptop compartment.' },
	{ id: 44, title: 'Running Shoes', category: 'men-shoes', price: 59, img: './images/Running Shoes.jpg', desc: 'Lightweight running shoes with excellent cushioning.' },
	{ id: 45, title: 'Coffee Mug', category: 'coffeemug', price: 15, img: './images/Coffeemug.jpg', desc: 'Ceramic mug, dishwasher safe.' },
	{ id: 46, title: 'Coffee Mug', category: 'coffeemug', price: 15, img: './images/Coffeemug 1.jpg', desc: 'Ceramic mug, dishwasher safe.' },
	{ id: 47, title: 'Coffee Mug', category: 'coffeemug', price: 15, img: './images/Coffeemug 2.jpg', desc: 'Ceramic mug, dishwasher safe.' },
	{ id: 48, title: 'Coffee Mug', category: 'coffeemug', price: 15, img: './images/Coffeemug 3.jpg', desc: 'Ceramic mug, dishwasher safe.' },
	{ id: 49, title: 'Coffee Mug', category: 'coffeemug', price: 15, img: './images/Coffeemug 4.jpg', desc: 'Ceramic mug, dishwasher safe.' },
	{ id: 50, title: 'Coffee Mug', category: 'coffeemug', price: 15, img: './images/Coffeemug 5.jpg', desc: 'Ceramic mug, dishwasher safe.' },
	{ id: 51, title: 'Sunglasses', category: 'accessories', price: 39, img: './images/Sun glass.jpg', desc: 'UV-protected stylish sunglasses.' },

];

// DOM references
const productGrid = document.getElementById('productGrid');
const cartCountEl = document.getElementById('cartCount');
const headerSearchInput = document.getElementById('headerSearchInput');
const searchInput = document.getElementById('searchInput');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

let cart = JSON.parse(localStorage.getItem('cart')||'[]');
let wishlist = JSON.parse(localStorage.getItem('wishlist')||'[]');

// ---------- Discounts ----------
function getDiscountForProduct(prod){
	if(!prod) return 0;
	const title = (prod.title||'').toLowerCase();
	const cat = (prod.category||'').toLowerCase();
	// 5% for men shirts and sarees
	if(cat === 'men-shirts' || cat === 'women-sarees') return 5;
	// 2% for bags (handbag)
	if(cat === 'handbag') return 2;
	// 1% for several specific items
	const onePercentKeywords = ['lipstick','ring','bangle','bracelet','coffeemug','coffee mug','eye liner','foundation'];
	for(const kw of onePercentKeywords){ if(title.includes(kw)) return 1; }
	return 0;
}

function getPriceAfterDiscount(prod){
	const d = getDiscountForProduct(prod);
	const price = Number(prod.price || 0);
	return +(price * (1 - d/100));
}

function formatPrice(val, currency='$'){
	if(Number.isInteger(val)) return `${currency}${val}`;
	return `${currency}${val.toFixed(2)}`;
}

function createPriceMarkup(orig, percent){
	if(!percent || percent <= 0) return `<span class="product-price">${formatPrice(orig)}</span>`;
	const finalP = +(orig * (1 - percent/100));
	return `<div class="d-flex align-items-baseline gap-2"><div class="product-price fw-bold">${formatPrice(finalP)}</div><div class="text-muted text-decoration-line-through">${formatPrice(orig)}</div><div class="badge bg-success ms-2">${percent}% off</div></div>`;
}

// ---------- Utilities ----------
function findProductByImageSrc(src){
	if(!src) return null;
	const filename = src.split('/').pop().toLowerCase();
	return products.find(p => (p.img||'').split('/').pop().toLowerCase() === filename) || null;
}

function parsePriceNearby(img){
	try{
		const card = img.closest('.card') || img.closest('.product-card') || img.closest('body');
		if(!card) return 0;
		const priceEl = card.querySelector('.product-price, .fw-bold, .card-price, .price');
		if(priceEl){
			const txt = priceEl.textContent || '';
			const m = txt.replace(/,/g,'').match(/\d+(?:\.\d+)?/);
			return m ? Number(m[0]) : 0;
		}
		const txt = card.textContent || '';
		const m = txt.match(/\$\s*(\d+(?:\.\d+)?)/);
		return m ? Number(m[1]) : 0;
	}catch(e){return 0}
}

// ---------- Rendering ----------
function renderProducts(list){
	if(!productGrid) return;
	productGrid.innerHTML = '';
	list.forEach(p => {
		const col = document.createElement('div');
		col.className = 'col-12 col-sm-6 col-md-4';
		col.innerHTML = `
			<div class="card h-100 product-card">
				<img src="${p.img}" class="card-img-top" alt="${p.title}">
				<div class="card-body d-flex flex-column">
					<div class="mb-2">
						<div class="product-title">${p.title}</div>
						${createPriceMarkup(p.price, getDiscountForProduct(p))}
					</div>
					<p class="card-text text-truncate">${p.desc}</p>
					<div class="mt-auto d-flex gap-2">
						<button class="btn btn-sm btn-primary add-to-cart" data-id="${p.id}">Add to Cart</button>
						<button class="btn btn-sm btn-outline-secondary view-details" data-id="${p.id}">Details</button>
					</div>
				</div>
			</div>
		`;
		productGrid.appendChild(col);
		const img = col.querySelector('img');
		img.onerror = () => {
			const fallback = document.createElement('div');
			fallback.className = 'image-fallback';
			fallback.textContent = p.title.toLowerCase().includes('watch') ? 'Watch image coming soon' : 'Image unavailable';
			img.replaceWith(fallback);
		};
	});

	// attach listeners
	document.querySelectorAll('.add-to-cart').forEach(btn => btn.addEventListener('click', (e)=>{
		const id = Number(btn.dataset.id);
		addToCart(id);
		btn.textContent = 'Added';
		btn.disabled = true;
		setTimeout(()=>{ btn.textContent='Add to Cart'; btn.disabled=false }, 900);
	}));

	document.querySelectorAll('.view-details').forEach(btn => btn.addEventListener('click', (e)=>{
		const id = Number(btn.dataset.id);
		const product = products.find(x=>x.id===id);
		showProductModal(product);
	}));
}

function showProductModal(product){
	if(!product) return;
	let modal = document.getElementById('productModal');
	if(!modal){
		modal = document.createElement('div');
		modal.id='productModal';
		modal.className='modal fade';
		modal.tabIndex = -1;
		modal.innerHTML = `
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="productModalLabel"></h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
						<img id="productModalImg" src="" alt="" class="img-fluid mb-3">
						<p id="productModalDesc"></p>
						<div class="h5" id="productModalPrice"></div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button id="modalAddBtn" type="button" class="btn btn-primary">Add to Cart</button>
					</div>
				</div>
			</div>
		`;
		document.body.appendChild(modal);
	}

	document.getElementById('productModalLabel').textContent = product.title;
	document.getElementById('productModalImg').src = product.img;
	document.getElementById('productModalDesc').textContent = product.desc;
	const disc = getDiscountForProduct(product);
	document.getElementById('productModalPrice').innerHTML = createPriceMarkup(product.price, disc);

	const bsModal = new bootstrap.Modal(document.getElementById('productModal'));
	document.getElementById('modalAddBtn').onclick = ()=>{ addToCart(product.id); bsModal.hide(); };
	bsModal.show();
}

// ---------- Cart & Wishlist ----------
function saveCart(){ localStorage.setItem('cart', JSON.stringify(cart)); }

function addToCart(input){
	if(typeof input === 'number'){
		const item = cart.find(i=>i.id===input && !i.custom);
		if(item) item.qty++;
		else cart.push({ id: input, qty: 1 });
	} else if(typeof input === 'string'){
		const item = cart.find(i=>i.id===input);
		if(item) item.qty++;
		else cart.push({ id: input, qty: 1, custom: true });
	} else if(typeof input === 'object' && input !== null){
		const key = input.id || ('custom-' + btoa(input.img || input.title || Math.random()).replace(/=/g,'')).slice(0,40);
		let item = cart.find(i=>i.id===key);
		if(item) item.qty++;
		else { item = { id: key, qty: 1, custom: true, title: input.title || '', price: input.price || 0, img: input.img || '' }; cart.push(item); }
	}
	saveCart();
	updateCartUI(true);
}

function removeFromCart(id){ cart = cart.filter(i=>String(i.id)!==String(id)); saveCart(); updateCartUI(); }

function saveWishlist(){ localStorage.setItem('wishlist', JSON.stringify(wishlist)); }

function normalizeWishlist(){
	if(!Array.isArray(wishlist)) wishlist = [];
	wishlist = wishlist.map(item => {
		if(!item) return null;
		if(typeof item === 'string' || typeof item === 'number'){
			const str = String(item);
			const pid = Number(str);
			if(!Number.isNaN(pid)){
				const prod = products.find(p=>p.id===pid);
				return { id: `p-${pid}`, productId: pid, title: prod?prod.title:str, img: prod?prod.img:'', price: prod?prod.price:0 };
			}
			return { id: str, title: str, img: '', price: 0 };
		}
		if(typeof item === 'object'){
			if(!item.id){
				if(item.productId) item.id = `p-${item.productId}`;
				else if(item.img) item.id = 'c-'+btoa(item.img).slice(0,24);
				else item.id = JSON.stringify(item).slice(0,24);
			}
			return item;
		}
		return null;
	}).filter(Boolean);
	saveWishlist();
}

function ensureWishlistOffcanvas(){
	if(document.getElementById('wishlistOffcanvas')) return;
	const off = document.createElement('div');
	off.className = 'offcanvas offcanvas-end';
	off.id = 'wishlistOffcanvas';
	off.tabIndex = -1;
	off.innerHTML = `
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Wishlist</h5>
			<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div class="offcanvas-body">
			<div id="wishlistItems" class="mb-3"></div>
			<div class="d-grid">
				<button id="wishlistAddAll" class="btn btn-primary">Add All to Cart</button>
			</div>
		</div>
	`;
	document.body.appendChild(off);
	document.getElementById('wishlistAddAll').addEventListener('click', ()=>{
		wishlist.forEach(w => {
			if(w.productId) addToCart(Number(w.productId));
			else addToCart({ title: w.title, price: w.price || 0, img: w.img || '' });
		});
		const bs = bootstrap.Offcanvas.getInstance(document.getElementById('wishlistOffcanvas'));
		if(bs) bs.hide();
	});
}

function toggleWishlistByProduct(productOrKey){
	normalizeWishlist();
	if(typeof productOrKey === 'number'){
		const pid = productOrKey; const id = `p-${pid}`;
		const idx = wishlist.findIndex(i=>i.id === id);
		if(idx >= 0) wishlist.splice(idx,1);
		else { const prod = products.find(p=>p.id===pid); wishlist.push({ id, productId: pid, title: prod?prod.title:`Product ${pid}`, img: prod?prod.img:'', price: prod?prod.price:0 }); }
	} else if(typeof productOrKey === 'string'){
		const id = productOrKey; const idx = wishlist.findIndex(i=>i.id === id || String(i.id) === String(id));
		if(idx >= 0) wishlist.splice(idx,1); else wishlist.push({ id, title: id, img: '', price: 0 });
	} else if(typeof productOrKey === 'object' && productOrKey !== null){
		const prod = productOrKey; const id = prod.productId ? `p-${prod.productId}` : (prod.id || ('c-'+btoa(prod.img||prod.title||Math.random()).slice(0,24)));
		const idx = wishlist.findIndex(i=>i.id === id);
		if(idx >= 0) wishlist.splice(idx,1); else wishlist.push({ id, productId: prod.productId || prod.id || null, title: prod.title || '', img: prod.img || '', price: prod.price || 0 });
	}
	saveWishlist(); updateWishlistUI(); renderWishlistOffcanvas();
}

function renderWishlistOffcanvas(){
	ensureWishlistOffcanvas();
	const container = document.getElementById('wishlistItems');
	if(!container) return;
	container.innerHTML = '';
	if(wishlist.length === 0){ container.innerHTML = '<div class="text-muted">Your wishlist is empty.</div>'; return; }
	wishlist.forEach(w => {
		const row = document.createElement('div');
		row.className = 'd-flex align-items-center mb-3';
		const img = w.img || ''; const title = w.title || 'Item'; const price = w.price || 0;
		row.innerHTML = `
			<img src="${img}" style="width:56px;height:56px;object-fit:cover" class="me-3 rounded">
			<div class="flex-grow-1">
				<div class="mb-1">${title}</div>
				<div class="text-muted small">${formatPrice(price)}</div>
			</div>
			<div class="text-end">
				<button class="btn btn-sm btn-outline-primary add-w-to-cart" data-id="${w.productId||''}">Add</button>
				<button class="btn btn-sm btn-link text-danger remove-w" data-id="${w.id}">Remove</button>
			</div>
		`;
		container.appendChild(row);
	});
	container.querySelectorAll('.remove-w').forEach(btn => btn.addEventListener('click', ()=>{ const id = btn.dataset.id; wishlist = wishlist.filter(i=>String(i.id)!==String(id)); saveWishlist(); renderWishlistOffcanvas(); updateWishlistUI(); }));
	container.querySelectorAll('.add-w-to-cart').forEach(btn => btn.addEventListener('click', ()=>{ const pid = Number(btn.dataset.id); if(pid) addToCart(pid); else { const id = btn.dataset.id; const item = wishlist.find(i=>String(i.id)===String(id)); if(item) addToCart({ title: item.title, price: item.price || 0, img: item.img || '' }); } }));
}

function updateWishlistUI(){
	normalizeWishlist();
	const links = Array.from(document.querySelectorAll('a')).filter(a=>/wishlist/i.test(a.textContent || ''));
	links.forEach(a=>{
		let badge = a.querySelector('.wishlist-badge');
		if(!badge){ badge = document.createElement('span'); badge.className = 'wishlist-badge badge bg-danger ms-2'; badge.style.fontSize='0.85rem'; a.appendChild(badge); }
		badge.textContent = wishlist.length;
		a.addEventListener('click', (e)=>{ e.preventDefault(); ensureWishlistOffcanvas(); const bs = new bootstrap.Offcanvas(document.getElementById('wishlistOffcanvas')); bs.show(); renderWishlistOffcanvas(); });
	});
}

function getCartCount(){ return cart.reduce((s,i)=>s+(i.qty||0),0); }

function animateCartBadge(){ if (!cartCountEl) return; cartCountEl.classList.add('animate-badge'); setTimeout(()=> cartCountEl.classList.remove('animate-badge'), 450); }

function updateCartUI(animate = false){
	if (cartCountEl) cartCountEl.textContent = getCartCount();
	if(animate && cart.length > 0) animateCartBadge();
	if (!cartItemsEl || !cartTotalEl) return;
	cartItemsEl.innerHTML = '';
	if(cart.length===0){ cartItemsEl.innerHTML = '<div class="text-muted">Your cart is empty.</div>'; cartTotalEl.textContent = '$0.00'; return; }
	let total = 0;
	cart.forEach(ci=>{
		const prod = products.find(p=>p.id===ci.id);
		const row = document.createElement('div');
		row.className = 'd-flex align-items-center mb-3';
		const img = (prod && prod.img) || ci.img || '';
		const title = (prod && prod.title) || ci.title || 'Item';
		const origPrice = (prod && prod.price) || (ci.price || 0);
		const disc = prod ? getDiscountForProduct(prod) : (ci.discount || 0);
		const price = +(origPrice * (1 - (disc/100)));
		row.innerHTML = `
			<img src="${img}" alt="${title}" style="width:64px;height:64px;object-fit:cover" class="me-3 rounded">
			<div class="flex-grow-1">
				<div class="mb-1">${title}</div>
				<div class="small text-muted">
					<span class="cart-price">${formatPrice(price)}</span>
					<span class="cart-qty badge bg-primary ms-2">Qty: ${ci.qty}</span>
				</div>
			</div>
			<div class="text-end">
				<div class="fw-bold">${formatPrice(price*ci.qty)}</div>
				<button class="btn btn-sm btn-link text-danger remove-item" data-id="${ci.id}">Remove</button>
			</div>
		`;
		cartItemsEl.appendChild(row);
		total += price*ci.qty;
	});
	cartTotalEl.textContent = `$${total.toFixed(2)}`;
	document.querySelectorAll('.remove-item').forEach(btn=>btn.addEventListener('click', ()=>{ removeFromCart(btn.dataset.id); }));
}

// Checkout
if (checkoutBtn) {
	checkoutBtn.addEventListener('click', ()=>{
		if(cart.length===0){ alert('Your cart is empty.'); return; }
		const method = document.querySelector('input[name="payment"]:checked');
		if(!method){ alert('Please select a payment method.'); return; }
		cart = []; saveCart(); updateCartUI();
		const offcanvasEl = document.getElementById('cartOffcanvas');
		const bsOff = bootstrap.Offcanvas.getInstance(offcanvasEl);
		if(bsOff) bsOff.hide();
		showOrderSuccess();
	});
}

// ---------- Overlays & static card enhancement ----------
function addImageOverlays(){
	const images = Array.from(document.querySelectorAll('img'));
	images.forEach(img => {
		const rect = img.getBoundingClientRect ? img.getBoundingClientRect() : { width: img.width || 0, height: img.height || 0 };
		if(rect.width < 40 || rect.height < 40) return;
		if(img.closest('header') || img.closest('footer')) return;
		if(img.parentElement && img.parentElement.classList.contains('img-overlay-wrap')) return;

		const wrap = document.createElement('div'); wrap.className = 'img-overlay-wrap'; wrap.style.position = 'relative';
		img.parentNode.insertBefore(wrap, img); wrap.appendChild(img);

		const overlay = document.createElement('div'); overlay.className = 'img-overlay d-flex gap-2';
		overlay.innerHTML = `
			<button class="btn btn-sm btn-light overlay-btn add-overlay" title="Add to cart"><i class="bi bi-cart-plus"></i></button>
			<button class="btn btn-sm btn-light overlay-btn wish-overlay" title="Add to wishlist"><i class="bi bi-heart"></i></button>
		`;
		wrap.appendChild(overlay);

		const prod = findProductByImageSrc(img.src);
		overlay.querySelector('.add-overlay').addEventListener('click', (e)=>{
			e.stopPropagation();
			if(prod) addToCart(prod.id);
			else { const title = img.alt || (img.src.split('/').pop()); const price = parsePriceNearby(img); addToCart({ title, price, img: img.src }); }
		});

		overlay.querySelector('.wish-overlay').addEventListener('click', (e)=>{
			e.stopPropagation();
			if(prod) toggleWishlistByProduct(prod.id);
			else { const key = 'custom-' + btoa(img.src).slice(0,24); toggleWishlistByProduct(key); }
		});
	});
}

function enhanceStaticCards(){
	products.forEach(p=>{
		const filename = p.img.split('/').pop();
		const imgs = Array.from(document.querySelectorAll(`img[src$="${filename}"]`));
		imgs.forEach(img=>{
			const card = img.closest('.card') || img.closest('.product-card') || img.closest('div');
			if(!card) return;
			const priceEl = card.querySelector('.product-price, .fw-bold, .card-price, .price, span.fw-bold');
			const percent = getDiscountForProduct(p);
			if(priceEl){ priceEl.innerHTML = createPriceMarkup(p.price, percent); }
			else { const body = card.querySelector('.card-body') || card; const div = document.createElement('div'); div.innerHTML = createPriceMarkup(p.price, percent); body.appendChild(div); }
		});
	});
}

// ---------- Countdown ----------
const countdownTarget = Date.now() + ((2 * 60 + 15) * 60 + 48) * 1000;
const countdownTimer = document.getElementById('countdownTimer');
function updateCountdown(){
	const remaining = countdownTarget - Date.now();
	if(!countdownTimer) return;
	if(remaining <= 0){ countdownTimer.innerHTML = '<span>00</span><span>00</span><span>00</span>'; return; }
	const seconds = Math.floor(remaining / 1000) % 60;
	const minutes = Math.floor(remaining / 60000) % 60;
	const hours = Math.floor(remaining / 3600000);
	countdownTimer.innerHTML = `\n\t\t<span>${String(hours).padStart(2,'0')}</span>\n\t\t<span>${String(minutes).padStart(2,'0')}</span>\n\t\t<span>${String(seconds).padStart(2,'0')}</span>\n\t`;
}
updateCountdown(); setInterval(updateCountdown, 1000);

// contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
	contactForm.addEventListener('submit', (e)=>{
		e.preventDefault();
		if(!contactForm.checkValidity()){ contactForm.classList.add('was-validated'); return; }
		const alertDiv = document.createElement('div'); alertDiv.className='alert alert-success mt-3'; alertDiv.textContent='Message sent — we will contact you soon!'; contactForm.parentNode.insertBefore(alertDiv, contactForm.nextSibling); contactForm.reset(); contactForm.classList.remove('was-validated'); setTimeout(()=>alertDiv.remove(),4000);
	});
}

function showOrderSuccess(){ const overlay = document.getElementById('orderSuccessOverlay'); if(!overlay) return; overlay.classList.remove('d-none'); setTimeout(()=>{ overlay.classList.add('d-none'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 2600); }

// header search handling (keeps original behaviour)
if (headerSearchInput) {
	headerSearchInput.addEventListener('keydown', (e)=>{ if(e.key !== 'Enter') return; const q = headerSearchInput.value.trim().toLowerCase(); if(!q) return; if(scrollToSection(q)) return; searchProducts(q); const productsSection = document.getElementById('products'); if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
}

// basic search (if page includes an input#searchInput)
if (searchInput) { searchInput.addEventListener('input', ()=>{ const q = searchInput.value.trim().toLowerCase(); searchProducts(q); }); }

function searchProducts(query){ if(!query){ renderProducts(products); return; } const filtered = products.filter(p => p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)); renderProducts(filtered); }

function scrollToSection(query){ const sectionMap = { home: '#home', collections: '#collections', category: '#collections' }; const key = Object.keys(sectionMap).find(k => query.includes(k)); if(!key) return false; const target = document.querySelector(sectionMap[key]); if(!target) return false; target.scrollIntoView({ behavior: 'smooth', block: 'start' }); return true; }

// DOM ready
document.addEventListener('DOMContentLoaded', ()=>{
	renderProducts(products);
	updateWishlistUI();
	addImageOverlays();
	enhanceStaticCards();
	updateCartUI();
});

// initial cart UI update (in case script loaded late)
updateCartUI();
