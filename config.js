// ========== CONFIGURAÇÃO DOS PRODUTOS ==========
// Cada modelo tem suas próprias configurações

const PRODUTOS = {
  
  
  'mirellasds': {
    nome: 'Mirellas',
    bot_url: 'https://apextry.com/go/novinhaz',
    grupo_vip: 'https://t.me/+g0eZXl5W87xkYjc8',
    foto: 'https://i.postimg.cc/FOTO_MIRELLA.jpg',
    cor_primaria: '#ff6b9d',
    cor_secundaria: '#c44569'
  },

    'pipokinha': {
    nome: 'MC Pipokinha',
    bot_url: 'https://apextry.com/go/ppokinha',
    grupo_vip: 'https://t.me/+Ec7pEKzkvyU5Y2I5',
    foto: '.fotoprincipal.jpg',
    cor_primaria: '#229ED9',
    cor_secundaria: '#229ED9'
  },
  
};

// Função para pegar dados do produto pela utm_campaign
function getProduto() {
  const params = new URLSearchParams(window.location.search);
  const campaign = params.get('utm_campaign') || 'bia';
  return PRODUTOS[campaign] || PRODUTOS['bia'];
}

// Função para pegar APENAS o grupo VIP
function getGrupoVIP() {
  const params = new URLSearchParams(window.location.search);
  const campaign = params.get('utm_campaign') || 'bia';
  const produto = PRODUTOS[campaign] || PRODUTOS['bia'];
  return produto.grupo_vip;
}
