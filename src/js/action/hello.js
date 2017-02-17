const DELETE_FRUIT = 'DELETE_FRUIT';

export function deleteFruit(fruitName) {
    return {
        type: DELETE_FRUIT,
        fruitName: fruitName
    }
}
