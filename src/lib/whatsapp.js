const WHATSAPP_NUMBER = '5511999758182';

export const whatsappLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_URL = whatsappLink("Olá! Vim pelo site da Dra. Isabela e gostaria de saber mais sobre o plano de emagrecimento personalizado. Podemos conversar?");

export const WHATSAPP_UNYQUE_URL = whatsappLink("Olá! Vim pelo site da Dra. Isabela e gostaria de agendar uma avaliação para o Unyque Pro.");
