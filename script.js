// ─────────────────────────────────────────
//  DADOS DO CARDÁPIO - Bar da Ana
// ─────────────────────────────────────────

const cardapio = [
  {
    categoria: "Bebidas",
    emoji: "🥤",
    itens: [
      {
        nome: "Coca-Cola Lata",
        preco: 6.00,
        imagem: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80",
      },
      {
        nome: "Suco Natural de Laranja",
        preco: 8.00,
        imagem: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80",
      },
      {
        nome: "Água Mineral",
        preco: 4.00,
        imagem: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=400&q=80",
      },
      {
        nome: "Limonada Suíça",
        preco: 10.00,
        imagem: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
      },
      {
        nome: "Chá Gelado de Pêssego",
        preco: 7.00,
        imagem: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=80",
      },
    ],
  },
  {
    categoria: "Cervejas",
    emoji: "🍺",
    itens: [
      {
        nome: "Heineken Long Neck",
        preco: 10.00,
        imagem: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=400&q=80",
      },
      {
        nome: "Brahma Duplo Malte",
        preco: 8.00,
        imagem: "https://images.unsplash.com/photo-1584225064536-6573a5021804?w=400&q=80",
      },
      {
        nome: "Skol Lata",
        preco: 7.00,
        imagem: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400&q=80",
      },
      {
        nome: "Corona Extra",
        preco: 12.00,
        imagem: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80",
      },
      {
        nome: "Stella Artois Long Neck",
        preco: 11.00,
        imagem: "https://images.unsplash.com/photo-1566633806827-ff4af90f0d94?w=400&q=80",
      },
    ],
  },
  {
    categoria: "Porções",
    emoji: "🍟",
    itens: [
      {
        nome: "Batata Frita",
        preco: 25.00,
        imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
      },
      {
        nome: "Calabresa Acebolada",
        preco: 30.00,
        imagem: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80",
      },
      {
        nome: "Frango à Passarinho",
        preco: 35.00,
        imagem: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80",
      },
      {
        nome: "Mandioca Frita",
        preco: 22.00,
        imagem: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
      },
      {
        nome: "Isca de Peixe",
        preco: 38.00,
        imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
      },
    ],
  },
  {
    categoria: "Drinks",
    emoji: "🍹",
    itens: [
      {
        nome: "Caipirinha de Limão",
        preco: 15.00,
        imagem: "https://images.unsplash.com/photo-1609345265499-2133bbeb6ce5?w=400&q=80",
      },
      {
        nome: "Mojito",
        preco: 20.00,
        imagem: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
      },
      {
        nome: "Gin Tônica",
        preco: 22.00,
        imagem: "https://images.unsplash.com/photo-1571950006419-5edc5029e06f?w=400&q=80",
      },
      {
        nome: "Aperol Spritz",
        preco: 25.00,
        imagem: "https://images.unsplash.com/photo-1629233801568-2d6b8d0b3b0e?w=400&q=80",
      },
      {
        nome: "Margarita",
        preco: 23.00,
        imagem: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
      },
    ],
  },
];

// ─────────────────────────────────────────
//  FORMATAÇÃO
// ─────────────────────────────────────────

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// ─────────────────────────────────────────
//  CRIAÇÃO DOS CARDS
// ─────────────────────────────────────────

function criarCardItem(item) {
  const card = document.createElement("div");
  card.className = "item";

  card.innerHTML = `
    <div class="item__img-wrap">
      <img
        src="${item.imagem}"
        alt="${item.nome}"
        class="item__img"
        loading="lazy"
        onerror="this.style.display='none'"
      />
    </div>
    <div class="item__body">
      <h3>${item.nome}</h3>
    </div>
    <div class="item__footer">
      <span class="item__price">${formatarPreco(item.preco)}</span>
    </div>
  `;

  return card;
}

// ─────────────────────────────────────────
//  CRIAÇÃO DAS SEÇÕES DE CATEGORIA
// ─────────────────────────────────────────

function criarSecaoCategoria(categoria) {
  const secao = document.createElement("div");
  secao.className = "cardapio__secao";

  const titulo = document.createElement("div");
  titulo.className = "cardapio__cat-titulo";
  titulo.innerHTML = `<span class="cardapio__cat-emoji">${categoria.emoji}</span>${categoria.categoria}`;

  const grid = document.createElement("div");
  grid.className = "cardapio__grid";

  categoria.itens.forEach((item) => {
    grid.appendChild(criarCardItem(item));
  });

  secao.appendChild(titulo);
  secao.appendChild(grid);

  return secao;
}

// ─────────────────────────────────────────
//  FILTRO POR CATEGORIA
// ─────────────────────────────────────────

function criarFiltros(container) {
  const wrapper = document.createElement("div");
  wrapper.className = "cardapio__filtros";

  const todas = ["Todos", ...cardapio.map((c) => c.categoria)];

  todas.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.className = "filtro-btn" + (i === 0 ? " filtro-btn--ativo" : "");
    btn.textContent = i === 0 ? cat : `${cardapio[i - 1].emoji} ${cat}`;
    btn.dataset.cat = cat;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".filtro-btn").forEach((b) =>
        b.classList.remove("filtro-btn--ativo")
      );
      btn.classList.add("filtro-btn--ativo");

      document.querySelectorAll(".cardapio__secao").forEach((sec) => {
        const titulo = sec.querySelector(".cardapio__cat-titulo").textContent.trim();
        if (cat === "Todos" || titulo.includes(cat)) {
          sec.style.display = "";
        } else {
          sec.style.display = "none";
        }
      });
    });

    wrapper.appendChild(btn);
  });

  container.appendChild(wrapper);
}

// ─────────────────────────────────────────
//  RENDERIZAÇÃO PRINCIPAL
// ─────────────────────────────────────────

function renderizarCardapio() {
  const secao = document.getElementById("cardapio");
  if (!secao) return;

  secao.innerHTML = `
    <div class="section__header">
      <div class="section__label">O que servimos</div>
      <h2>Cardápio</h2>
    </div>
  `;

  const conteudo = document.createElement("div");
  conteudo.className = "cardapio__conteudo";

  criarFiltros(conteudo);

  cardapio.forEach((categoria) => {
    conteudo.appendChild(criarSecaoCategoria(categoria));
  });

  secao.appendChild(conteudo);
}

// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────

document.addEventListener("DOMContentLoaded", renderizarCardapio);
