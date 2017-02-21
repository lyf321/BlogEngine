export function deleteFruit(fruitName) {
    return {
        type: 'DELETE_FRUIT',
        fruitName: fruitName
    }
}