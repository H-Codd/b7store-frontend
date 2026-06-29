export const data = {
    banners : [
        { img: '/assets/banners/banner-1.png', link:''},
        { img: '/assets/banners/banner-2.png', link:''},
        { img: '/assets/banners/banner-3.png', link:''},
        { img: '/assets/banners/banner-4.png', link:''},
    ],
    products: [
        {id: 1, label: 'Camisa PHP', price: 29.90, image: "/assets/products/camiseta-php.png", liked: false},
        {id: 2, label: 'Camisa Laravel', price: 59.90, image: "/assets/products/camiseta-laravel-branca.png", liked: false},
        {id: 3, label: 'Camisa Node', price: 39.90, image: "/assets/products/camiseta-node.png", liked: true},
        {id: 4, label: 'Camisa React', price: 19.90, image: "/assets/products/camiseta-react-azul.png", liked: false},
    ], 
    menu: [
        { label: "Camisa", href: "/categories/camisas" },
        { label: "Kits", href: "/categories/kits" },
    ],
    product: {
        id: 1,
        label: 'Camisa PHP',
        images: ['/assets/products/camiseta-php.png', "/assets/products/camiseta-laravel-branca.png"],
        price: 19.90,
        liked: false,
        description: 'Descrição do Produto'
    },
    addresses: [
        {id: 1, zipcode: '12345', street: 'Rua teste 1', number: '123', city: 'Cidade', state: 'Estado', country: 'Pais' },
        {id: 2, zipcode: '6789', street: 'Rua teste 2', number: '153', city: 'Cidade', state: 'Estado', country: 'Pais' },
        {id: 3, zipcode: '01234', street: 'Rua teste 3', number: '143', city: 'Cidade', state: 'Estado', country: 'Pais' }
    ]
    
}