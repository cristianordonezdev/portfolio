export const projects = [
    {
      name: 'BrandMe',
      images: [
        new URL('@/assets/img/OLC.jpeg', import.meta.url),
        new URL('@/assets/img/brandme1.png', import.meta.url),
        new URL('@/assets/img/brandme2.png', import.meta.url),
        new URL('@/assets/img/brandme3.png', import.meta.url),
      ],
      url: 'https://app.brandme.la/',
      slug: 'app-brandme',
      is_in_progress: false,
    },
    {
      name: 'Bacaanda',
      images: [
        new URL('@/assets/img/ba1.png', import.meta.url),
        new URL('@/assets/img/ba2.png', import.meta.url),
        new URL('@/assets/img/ba3.png', import.meta.url),
      ],
      slug: 'app-saluda+',
      url: 'https://app.saludaplus.com/',
    },
    {
      name: 'Crece tus redes',
      images: [
        new URL('@/assets/img/social.jpeg', import.meta.url),
        new URL('@/assets/img/social1.png', import.meta.url),
        new URL('@/assets/img/social2.png', import.meta.url),
      ],
      url: 'https://sandbox.social.crecetusredes.com',
      slug: 'crece-tus-redes',
      is_in_progress: true,
    },
]