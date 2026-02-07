/**
 * Dados estáticos reutilizados nos componentes
 * Centraliza informações que eram duplicadas
 */

// Links de navegação
export const LINKS_NAVEGACAO = [
    { id: 'home', label: 'Home', icone: '🏠', descricao: 'Voltar ao início' },
    { id: 'books', label: 'Books', icone: '📚', descricao: 'Nossos livros Oxford' },
    { id: 'about', label: 'About', icone: 'ℹ️', descricao: 'Sobre o curso' },
    { id: 'contact', label: 'Contact', icone: '📞', descricao: 'Entre em contato' },
]

// Contatos (WhatsApp e Instagram)
export const CONTATOS = [
    {
        id: 1,
        tipo: 'whatsapp',
        label: '24 99395-5771',
        icone: '💬',
        url: 'https://wa.me/5524993955771?text=Hello,%20I%20want%20to%20start%20the%20course!',
    },
    {
        id: 2,
        tipo: 'instagram',
        label: 'Instagram',
        icone: '📸',
        url: 'https://www.instagram.com/english.unlimited.for.adults/',
    },
]

// Diferenciais do curso
export const DIFERENCIAIS_CURSO = [
    {
        id: 1,
        icone: '🎯',
        titulo: 'Oxford Method',
        descricao: 'We use the Oxford method, recognized worldwide for its effectiveness in teaching English.',
    },
    {
        id: 2,
        icone: '👥',
        titulo: 'For Adults',
        descricao: 'Classes specially adapted for adults who want to learn English in a practical and objective way.',
    },
    {
        id: 3,
        icone: '🌍',
        titulo: 'Unlimited English',
        descricao: 'No limits to learning. Flexible and personalized classes according to your needs.',
    },
    {
        id: 4,
        icone: '👨‍🏫',
        titulo: 'Experienced Teacher',
        descricao: 'Classes with a private teacher dedicated to your learning and development.',
    },
]
