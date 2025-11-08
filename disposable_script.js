// --- SVG ICONS (inline, no external links) ---
const Icons = {
  paperBag: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="26" y="28" width="68" height="80" rx="6" fill="#C7A269" />
      <path d="M26 40h68v-8c0-3-2-5-5-5H31c-3 0-5 2-5 5v8z" fill="#B2885A"/>
      <path d="M45 28c0-8 30-8 30 0" fill="none" stroke="#6B4F2A" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `,
  juteBag: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="36" width="72" height="66" rx="8" fill="#9F8F4F"/>
      <rect x="24" y="36" width="72" height="66" rx="8" fill="none" stroke="#6E6235" stroke-width="3" stroke-dasharray="3 3"/>
      <path d="M40 36c0-18 40-18 40 0" fill="none" stroke="#6E6235" stroke-width="4" stroke-linecap="round"/>
      <circle cx="60" cy="69" r="14" fill="#7EA04D"/>
      <path d="M60 58c6 6 6 16 0 22-6-6-6-16 0-22z" fill="#5E803A"/>
    </svg>
  `,
  arecaPlate: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="40" fill="#E8D9B5" stroke="#C8B48B" stroke-width="4"/>
      <circle cx="60" cy="60" r="28" fill="#F6EBD0"/>
      <path d="M40 60c10-4 30-4 40 0" stroke="#C8B48B" stroke-width="2" fill="none"/>
    </svg>
  `,
  bambooCutlery: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="36" y="20" width="8" height="80" rx="4" fill="#B8832F"/>
      <rect x="76" y="20" width="8" height="80" rx="4" fill="#B8832F"/>
      <path d="M36 28h8c0 10-8 10-8 0z" fill="#B8832F"/>
      <rect x="70" y="20" width="20" height="20" rx="10" fill="#B8832F"/>
    </svg>
  `,
  paperStraws: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-20 60 60)">
        <rect x="30" y="20" width="10" height="80" rx="5" fill="#E33"/>
        <rect x="50" y="20" width="10" height="80" rx="5" fill="#3AE"/>
        <rect x="70" y="20" width="10" height="80" rx="5" fill="#FAA"/>
      </g>
    </svg>
  `,
  compostBox: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="42" width="72" height="46" rx="8" fill="#DADADA" stroke="#B9B9B9" stroke-width="3"/>
      <rect x="18" y="32" width="84" height="14" rx="6" fill="#EFEFEF" stroke="#B9B9B9" stroke-width="2"/>
      <path d="M50 65l6-6 8 8 12-12 6 6-18 18z" fill="#6BBF59"/>
    </svg>
  `,
  palmBowl: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 60c6 22 26 34 40 34s34-12 40-34H20z" fill="#DDBF8C" stroke="#B89662" stroke-width="3"/>
      <path d="M35 64c10 6 40 6 50 0" stroke="#B89662" stroke-width="2" fill="none"/>
    </svg>
  `,
  clothPouch: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 40h48l-6 56H42l-6-56z" fill="#C98F6B" />
      <path d="M36 40h48l-4-10H40l-4 10z" fill="#A36B4E" />
      <line x1="40" y1="40" x2="80" y2="40" stroke="#6B4633" stroke-width="3"/>
      <circle cx="60" cy="75" r="10" fill="#A36B4E"/>
    </svg>
  `,
  recycledCup: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 28h48l-8 72H44l-8-72z" fill="#DDD"/>
      <rect x="32" y="20" width="56" height="10" rx="4" fill="#BBB"/>
      <g transform="translate(60 70)">
        <path d="M0-12l6 6-4 1 6 6-6-2-2 6-2-6-6 2 6-6-4-1 6-6z" fill="#45A049"/>
      </g>
    </svg>
  `,
  woodenSticks: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="42" y="20" width="8" height="80" rx="4" fill="#C5965A"/>
      <rect x="70" y="20" width="8" height="80" rx="4" fill="#C5965A"/>
    </svg>
  `
};

// --- PRODUCTS ---
const products = [
  { id: 1,  name: 'Paper Bags (Medium)',                 price: 199, icon: Icons.paperBag },
  { id: 2,  name: 'Jute Bags',                            price: 349, icon: Icons.juteBag },
  { id: 3,  name: 'Areca Leaf Plates (10")',              price: 299, icon: Icons.arecaPlate },
  { id: 4,  name: 'Bamboo Cutlery Set',                   price: 259, icon: Icons.bambooCutlery },
  { id: 5,  name: 'Paper Straws (100 pcs)',               price: 179, icon: Icons.paperStraws },
  { id: 6,  name: 'Compostable Food Boxes (25 pcs)',      price: 329, icon: Icons.compostBox },
  { id: 7,  name: 'Palm Leaf Bowls (50 pcs)',             price: 249, icon: Icons.palmBowl },
  { id: 8,  name: 'Cloth Pouches (Set of 5)',             price: 199, icon: Icons.clothPouch },
  { id: 9,  name: 'Recycled Paper Cups (250ml)',          price: 189, icon: Icons.recycledCup },
  { id: 10, name: 'Wooden Stir Sticks (100 pcs)',         price: 99,  icon: Icons.woodenSticks }
];

const productGrid      = document.getElementById('productGrid');
const cartItems        = document.getElementById('cartItems');
const cartTotal        = document.getElementById('cartTotal');
const purchaseBtn      = document.getElementById('purchaseBtn');
const checkoutSection  = document.getElementById('checkout');
const checkoutForm     = document.getElementById('checkoutForm');
const confirmationMsg  = document.getElementById('confirmationMsg');

let cart = [];

// Render products with inline SVG
function renderProducts() {
  productGrid.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="icon">${p.icon}</div>
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button data-id="${p.id}">Add to Cart</button>
    `;
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => addToCart(p.id));
    productGrid.appendChild(card);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(it => {
    total += it.price * it.qty;
    const li = document.createElement('li');
    li.textContent = `${it.name} x${it.qty} — ₹${it.price * it.qty}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Total: ₹${total}`;
}

purchaseBtn.addEventListener('click', () => {
  if (cart.length === 0) return alert('Your cart is empty!');
  checkoutSection.classList.remove('hidden');
  checkoutSection.classList.add('active');
  window.scrollTo({ top: checkoutSection.offsetTop - 50, behavior: 'smooth' });
});

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkoutForm.reset();
  cart = [];
  renderCart();
  confirmationMsg.classList.remove('hidden');
  checkoutSection.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Footer year + initial render
document.getElementById('year').textContent = new Date().getFullYear();
renderProducts();
