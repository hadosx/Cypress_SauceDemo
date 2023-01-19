const locators = {
    CARRINHO_ITENS: {
        PRIMEIRO: '.cart_list > :nth-child(3)',
        SEGUNDO: '.cart_list > :nth-child(4)',
        TERCEIRO: '.cart_list > :nth-child(5)'
    },

    PRODUTOS_ITENS:{
        PRIMEIRO: ':nth-child(1) > .inventory_item_description',
        SEGUNDO: ':nth-child(2) > .inventory_item_description',
        TERCEIRO: ':nth-child(3) > .inventory_item_description'

    }

}

export default locators